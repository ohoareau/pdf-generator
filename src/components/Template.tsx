import {usePdfComponent} from "../hooks/usePdfComponent";

export function Template({type, config}: TemplateProps) {
    const Comp = usePdfComponent('template', type);

    return <Comp {...config} />
}

export interface TemplateProps {
    type?: string;
    [key: string]: any;
}

export default Template;