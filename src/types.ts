import IContext from "./IContext";
import IBundle from "./IBundle";

export type data = {
    [key: string]: any;
};

export type config = {
    template?: string;
    pages?: pages;
};

export type options = {
    template?: any; // forced template component
    bundles?: (IBundle|string)[];
};

export type pages = page[];

export type page = {
    type?: string;
    config?: {
        header?: header;
        content?: content;
        footer?: footer;
    }
}

export type header = {
    content?: content;
};

export type footer = {
    content?: content;
};

export type content = content_item[];

export type content_item = {
    styles?: any;
};

export type pdf_context_value = IContext;

export type font = {
    name: string;
    style: string;
    weight: number;
    format?: string;
    path: string;
};