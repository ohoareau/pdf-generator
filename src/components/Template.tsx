import {usePdfComponent} from "../hooks/usePdfComponent";

export function Template({type, config, template}: TemplateProps) {
    const Comp = usePdfComponent('template', type, 'default', false, template);

    return Comp ? <Comp {...config} /> : null;
}

export interface TemplateProps {
    type?: string;
    template?: any;
    [key: string]: any;
}

export default Template;