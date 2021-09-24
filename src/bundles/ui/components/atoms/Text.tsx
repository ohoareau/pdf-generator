import { AsComponent } from '../../as';
import {
    WithBold,
    WithCenter,
    WithText,
    WithUpper,
    WithEllipsis,
    WithMaxLen,
} from '../../withs';
import {Text as PdfText} from '@react-pdf/renderer';
import {useMemo} from "react";

// noinspection JSUnusedLocalSymbols
export function Text({
    bold = false,
    center = false,
    ellipsis = undefined,
    maxLen = -1,
    text,
    upper = false,
    variant = undefined,
}: TextProps) {
    const styles = useMemo(() => ({
        root: {
            align: center ? 'center' : undefined,
            textTransform: upper ? 'uppercase' : undefined,
            fontWeight: bold ? 'bold' : undefined,
        },
    }), [center, upper, bold]);
    if (!text) return null;
    // noinspection SuspiciousTypeOfGuard
    const len = ('string' === typeof text) ? text.length : undefined;
    const hasOverflow = 0 <= maxLen && (len || 0) > maxLen;
    text = hasOverflow ? `${(text as string).slice(0, maxLen)}${ellipsis || ''}` : text;

    return (
        <PdfText style={[styles.root]}>{text}</PdfText>
    )
}

export interface TextProps
    extends AsComponent,
        WithText,
        WithMaxLen,
        WithEllipsis,
        WithUpper,
        WithBold,
        WithCenter {
    variant?: string;
}

// noinspection JSUnusedGlobalSymbols
export default Text;
