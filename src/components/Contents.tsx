import {content, data} from "../types";
import Content from "./Content";

export function Contents({children, content = [], contentProps = [], contentStyles = []}: ContentsProps) {
    return (
        <>
            {content.map(({styles = {}, ...item}, index) => <Content key={index} contentIndex={index} totalContents={content.length} {...item} styles={{...contentStyles[index], ...styles}} {...contentProps[index]} />)}
            {children || false}
        </>
    );
}

export interface ContentsProps {
    children?: any;
    content?: content;
    contentProps?: any[];
    contentStyles?: any[];
    data?: data;
}

export default Contents;