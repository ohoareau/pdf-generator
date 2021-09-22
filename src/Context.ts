import IPdfBundle from "./IBundle";
import IContext from "./IContext";
import {data, config, options} from './types';
import IBundle from "./IBundle";
import path from 'path';

export class Context implements IContext {
    private readonly bundles: {[key: string]: IPdfBundle} = {};
    private readonly data: data;
    private readonly config: config;
    private readonly options: options;
    constructor(data: data, config: config, options: options) {
        this.data = data;
        this.config = config;
        this.options = options;
        (this.options.bundles || []).forEach(bundle => {
            if ('string' === typeof bundle) {
                bundle = this.loadBundle(bundle);
            }
            this.addBundle(<IBundle>bundle);
        })
    }
    getData(): data {
        return this.data;
    }
    getConfig(): config {
        return this.config;
    }
    getOptions(): options {
        return this.options;
    }
    getSortedBundles() {
        return Object.values(this.bundles).reverse();
    }
    getComponent(type: string, name: string, defaultName: string) {
        let x = name;
        const bundles = this.getSortedBundles();
        let bundle = bundles.find(bundle => bundle.hasComponent(type, x));
        if (!bundle) {
            x = defaultName;
            bundle = bundles.find(bundle => bundle.hasComponent(type, x));
            if (!bundle) {
                throw new Error(`Unknown component '${name}' of type '${type}' (no default component '${defaultName}' as well)`);
            }
        }
        return bundle.getComponent(type, name);
    }
    loadBundle(dsn: string) {
        dsn = ('@' === dsn.slice(0, 1) && (-1 === dsn.indexOf('/'))) ? `${__dirname}/bundles/${dsn.slice(1)}//${dsn.slice(1, 2).toUpperCase()}${dsn.slice(2)}Bundle` : dsn;
        const [p, className = 'MainBundle'] = dsn.split('//');
        const bundleClass = require(path.resolve(`${p}/${className}.js`)).default;

        return new bundleClass();
    }
    addBundle(bundle: IPdfBundle) {
        this.bundles[bundle.getName()] = bundle;

        return this;
    }
    getBundle(name: string): IPdfBundle {
        if (!this.hasBundle(name)) {
            throw new Error(`Unknown bundle '${name}'`);
        }

        return this.bundles[name];
    }
    hasBundle(name: string): boolean {
        return !!this.bundles[name];
    }
}

export default Context;