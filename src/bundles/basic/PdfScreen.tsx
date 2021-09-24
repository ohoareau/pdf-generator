import {useMemo} from "react";
import {Document, Page, PDFViewer} from "@react-pdf/renderer";
import {PdfProvider} from '../../contexts';
import Context from '../../Context';
import BasicBundle from "./BasicBundle";
import debug from 'debug';

process.env.STORYBOOK_DEBUG && debug.enabled(process.env.STORYBOOK_DEBUG)

export function PdfScreen({children, orientation = 'portrait', pageSize = 'A4', page = true, bundles = []}: PdfScreenProps) {
    const options = useMemo(() => ({
        bundles: [new BasicBundle(), ...bundles],
    }), []);
    const data = useMemo(() => ({}), []);
    const config = useMemo(() => ({}), []);
    const pdfContext = useMemo(() => new Context(data, config, options), [options, data, config])
    let content = children;
    page && (content = (
        <Page orientation={orientation}
              size={pageSize as any}
              style={{
                  margin: 20,
                  paddingRight: 40
              }}
        >
            {content}
        </Page>
    ));

    return (
        <PDFViewer
            style={{
                width: "100%",
                height: "90vh"
            }}
        >
            <Document>
                <PdfProvider value={pdfContext}>
                    {content}
                </PdfProvider>
            </Document>
        </PDFViewer>
    );
}

export interface PdfScreenProps {
    children?: any;
    orientation?: "landscape" | "portrait";
    pageSize?: string;
    page?: boolean;
    bundles?: any[];
}

// noinspection JSUnusedGlobalSymbols
export default PdfScreen;