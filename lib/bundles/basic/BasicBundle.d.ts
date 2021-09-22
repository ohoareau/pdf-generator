import { ComponentType } from "react";
import AbstractBundle from "../../AbstractBundle";
export declare class BasicBundle extends AbstractBundle {
    protected components: {
        [key: string]: ComponentType<any>;
    };
    constructor();
    getComponent(type: string, name: string): any;
    hasComponent(type: string, name: string): boolean;
}
//# sourceMappingURL=BasicBundle.d.ts.map