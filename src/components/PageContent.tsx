import Contents from './Contents';
import {content, data} from "../types";

export function PageContent({children, content}: PageContentProps) {
    return (
        <Contents content={content}>
            {children || false}
        </Contents>
    );
}

export interface PageContentProps {
    children?: any;
    content?: content;
    data?: data;
}

export default PageContent;