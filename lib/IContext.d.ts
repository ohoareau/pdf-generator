import IBundle from "./IBundle";
export interface IContext {
    getComponent(type: string, name: string, defaultName: string): any;
    addBundle(bundle: IBundle): any;
    getBundle(name: string): IBundle;
    hasBundle(name: string): boolean;
}
export default IContext;
//# sourceMappingURL=IContext.d.ts.map