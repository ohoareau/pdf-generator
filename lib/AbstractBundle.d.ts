import IBundle from "./IBundle";
import { ComponentType } from "react";
export declare abstract class AbstractBundle implements IBundle {
    private readonly name;
    protected constructor(name: string);
    getName(): string;
    protected buildComponentName(type: string, name: string): string;
    abstract getComponent(type: string, name: string): ComponentType<any>;
    abstract hasComponent(type: string, name: string): boolean;
}
export default AbstractBundle;
//# sourceMappingURL=AbstractBundle.d.ts.map