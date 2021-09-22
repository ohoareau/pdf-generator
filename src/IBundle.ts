import {ComponentType} from "react";

export interface IBundle {
    getName(): string;
    getComponent(type: string, name: string): ComponentType<any>;
    hasComponent(type: string, name: string): boolean;
}

export default IBundle;