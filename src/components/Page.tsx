import {usePdfComponent} from "../hooks/usePdfComponent";

export function Page({config, type}: PageProps) {
    const Comp = usePdfComponent('page', type);

    return <Comp {...config} componentType={'page'} componentName={type} />
}

export interface PageProps {
    config?: any;
    type?: string;
    currentPage?: number;
    totalPages?: number;
    key?: any;
}

export default Page;