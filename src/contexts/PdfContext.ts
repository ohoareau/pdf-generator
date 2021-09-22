import { createContext } from 'react';
import { pdf_context_value } from '../types';
import Context from "../Context";
const PdfContext = createContext<pdf_context_value>(new Context({}, {}, {}));
export const PdfProvider = PdfContext.Provider;
export const PdfConsumer = PdfContext.Consumer;
PdfContext.displayName = 'PdfContext';
export default PdfContext;
