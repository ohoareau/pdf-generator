import {
    class_name,
    children,
    rich_text,
    styles,
    flag, image,
} from './types';
import {
    padding,
    padding_x,
    padding_y,
    padding_top,
    padding_bottom,
    padding_left,
    padding_right,
} from './mappings/paddings';
import { margin, margin_x, margin_y, margin_top, margin_bottom, margin_left, margin_right } from './mappings/margins';
import { border, border_bottom, border_left, border_right, border_top, border_x, border_y } from './mappings/borders';

export interface WithImage {
    image?: image;
}

export interface WithClassName {
    className?: class_name;
}

export interface WithStyles {
    styles?: styles;
}

export interface WithChildren {
    children?: children;
}

export interface WithBold {
    bold?: flag;
}

export interface WithCenter {
    center?: flag;
}

export interface WithUpper {
    upper?: flag;
}

export interface WithEllipsis {
    ellipsis?: rich_text;
}

export interface WithMaxLen {
    maxLen?: number;
}

// WithTitle
export interface WithTitle {
    title?: rich_text;
}

export interface WithText {
    text?: rich_text;
}

export interface WithOverline {
    overline?: rich_text;
}

export interface WithMessage {
    message?: rich_text;
}

export interface WithDescription {
    description?: rich_text;
}

export interface WithPadding {
    p?: padding;
    px?: padding_x;
    py?: padding_y;
    pt?: padding_top;
    pb?: padding_bottom;
    pl?: padding_left;
    pr?: padding_right;
}

export interface WithMargin {
    m?: margin;
    mx?: margin_x;
    my?: margin_y;
    mt?: margin_top;
    mb?: margin_bottom;
    ml?: margin_left;
    mr?: margin_right;
}

export interface WithBorder {
    b?: border;
    bx?: border_x;
    by?: border_y;
    bt?: border_top;
    bb?: border_bottom;
    bl?: border_left;
    br?: border_right;
}

export interface WithAny {
    [key: string]: any;
}

// WithText
export interface WithText {
    text?: rich_text;
}
