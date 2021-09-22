import {ComponentType} from "react";
import AbstractBundle from "../../AbstractBundle";
import * as templates from './components/templates';
import * as pages from './components/pages';
import * as contents from './components/contents';

export class BasicBundle extends AbstractBundle {
    protected components: {[key: string]: ComponentType<any>};
    constructor() {
        super('basic');
        this.components = {
            template: templates,
            page: pages,
            content: contents,
        };
    }
    getComponent(type: string, name: string) {
        return this.components[type][this.buildComponentName(type, name)];
    }
    hasComponent(type: string, name: string): boolean {
        return !!(this.components[type] || {})[this.buildComponentName(type, name)];
    }
}

export default BasicBundle;