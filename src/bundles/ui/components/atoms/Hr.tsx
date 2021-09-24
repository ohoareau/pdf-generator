import Div from "./Div";
import {WithClassName} from "../../withs";

export function Hr({className}: HrProps) {
    return <Div className={className} />;
}

export interface HrProps extends WithClassName {}

// noinspection JSUnusedGlobalSymbols
export default Hr;
