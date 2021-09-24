import Bundle from "../../Bundle";
import * as contents from './components/contents';

export class UiBundle extends Bundle {
    constructor() {
        super('ui', {content: contents});
    }
}

// noinspection JSUnusedGlobalSymbols
export default UiBundle;