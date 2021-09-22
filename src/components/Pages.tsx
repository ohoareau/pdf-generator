import Page from "./Page";
import {data, page} from '../types';

export function Pages({pages = []}: DefaultPdfProps) {
    !pages.length && (pages = [...pages]) && pages.push({});

    return (
        <>
            {pages.map((page, index) => (
                <Page key={index} currentPage={index} totalPages={pages.length || 0} {...page} />
            ))}
        </>
    );
}

export interface DefaultPdfProps {
    data?: data;
    pages?: page[];
}

export default Pages