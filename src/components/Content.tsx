import {usePdfComponent} from "../hooks";

export function Content({type, config, children, ...props}: ContentProps) {
    const Comp = usePdfComponent('content', type);

    return (
        <Comp {...props} {...config} componentType={'content'} componentName={type}>
            {children || false}
        </Comp>
    );
}

export interface ContentProps {
    children?: any;
    type?: string;
    config?: any;
    [key: string]: any;
}

export default Content;