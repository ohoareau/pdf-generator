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
    getComponent(type: string, name: string, defaultName: string) {
        let x = name;
        let bundle = Object.values(this.bundles).find(bundle => bundle.hasComponent(type, x));
        if (!bundle) {
            x = defaultName;
            bundle = Object.values(this.bundles).find(bundle => bundle.hasComponent(type, x));
            if (!bundle) {
                throw new Error(`Unknown component '${name}' of type '${type}' (no default component '${defaultName}' as well)`);
            }
        }
        return bundle.getComponent(type, name);
    }
    loadBundle(dsn: string) {
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