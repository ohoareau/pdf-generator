import IContext from "./IContext";
import IBundle from "./IBundle";
export declare type data = {
    [key: string]: any;
};
export declare type config = {
    template?: string;
    pages?: pages;
};
export declare type options = {
    bundles?: IBundle[];
};
export declare type pages = page[];
export declare type page = {
    header?: header;
    content?: content;
    footer?: footer;
};
export declare type header = {
    content?: content;
};
export declare type footer = {
    content?: content;
};
export declare type content = content_item[];
export declare type content_item = {
    styles?: any;
};
export declare type pdf_context_value = IContext;
//# sourceMappingURL=types.d.ts.map