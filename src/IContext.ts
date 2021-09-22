import IBundle from "./IBundle";

export interface IContext {
    getComponent(type: string, name: string, defaultName: string);
    addBundle(bundle: IBundle);
    getBundle(name: string): IBundle;
    hasBundle(name: string): boolean;
}

export default IContext;