import IBundle from "./IBundle";
import {ComponentType} from "react";
import upperCamelCase from "./utils/upperCamelCase";

export abstract class AbstractBundle implements IBundle {
    private readonly name: string;
    protected constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    protected buildComponentName(type: string, name: string) {
        return upperCamelCase([name, type]);
    }
    abstract getComponent(type: string, name: string): ComponentType<any>;
    abstract hasComponent(type: string, name: string): boolean;
}

export default AbstractBundle;