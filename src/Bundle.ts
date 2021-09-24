import {ComponentType} from "react";
import AbstractBundle from "./AbstractBundle";

export class Bundle extends AbstractBundle {
    protected components: {[key: string]: ComponentType<any>};
    constructor(name: string, components: {[key: string]: ComponentType<any>} = {}) {
        super(name);
        this.components = {...components};
    }
    getComponent(type: string, name: string) {
        this.debug('providing component %s:%s', type, name);
        return this.components[type][this.buildComponentName(type, name)];
    }
    hasComponent(type: string, name: string): boolean {
        return !!(this.components[type] || {})[this.buildComponentName(type, name)];
    }
}

export default Bundle;