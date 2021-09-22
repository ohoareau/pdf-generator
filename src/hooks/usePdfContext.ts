import {useContext} from "react";
import PdfContext from '../contexts/PdfContext';
import {pdf_context_value} from "../types";

export function usePdfContext(): pdf_context_value {
    return useContext(PdfContext);
}

export default usePdfContext;