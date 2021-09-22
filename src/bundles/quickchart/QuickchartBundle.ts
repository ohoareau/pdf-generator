import Bundle from "../../Bundle";
import * as contents from './components/contents';

export class QuickchartBundle extends Bundle {
    constructor() {
        super('quickchart', {content: contents});
    }
}

export default QuickchartBundle;