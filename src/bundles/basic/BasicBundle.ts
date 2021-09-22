import Bundle from "../../Bundle";
import * as templates from './components/templates';
import * as pages from './components/pages';
import * as contents from './components/contents';

export class BasicBundle extends Bundle {
    constructor() {
        super('basic', {template: templates, page: pages, content: contents});
    }
}

export default BasicBundle;