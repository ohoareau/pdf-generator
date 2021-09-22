import IPdfBundle from "./IBundle";
import IContext from "./IContext";
import { data, config, options } from './types';
export declare class Context implements IContext {
    private readonly bundles;
    private readonly data;
    private readonly config;
    private readonly options;
    constructor(data: data, config: config, options: options);
    getData(): data;
    getConfig(): config;
    getOptions(): options;
    getComponent(type: string, name: string, defaultName: string): any;
    addBundle(bundle: IPdfBundle): this;
    getBundle(name: string): IPdfBundle;
    hasBundle(name: string): boolean;
}
export default Context;
//# sourceMappingURL=Context.d.ts.map