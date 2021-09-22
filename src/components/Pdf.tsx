import {Document} from '@react-pdf/renderer';
import {data, config, options} from '../types';
import Context from "../Context";
import {useMemo} from "react";
import {PdfProvider} from "../contexts";
import Template from "./Template";

export const Pdf = ({data = {}, config = {}, options = {}}: PdfProps) => {
    const pdfContext = useMemo(() => new Context(data, config, options), [options, data, config])

    return (
        <Document>
            <PdfProvider value={pdfContext}>
                <Template {...config} />
            </PdfProvider>
        </Document>
    )
};

export interface PdfProps {
    data?: data;
    config?: config;
    options?: options;
}

export default Pdf