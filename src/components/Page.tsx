import {data} from "../types";
import {usePdfComponent} from "../hooks/usePdfComponent";

export function Page({config, type}: PageProps) {
    const Comp = usePdfComponent('page', type);

    return <Comp {...config} componentType={'page'} componentName={type} />
}

export interface PageProps {
    children?: any;
    type?: string;
    data?: data;
    [key: string]: any;
}

export default Page;