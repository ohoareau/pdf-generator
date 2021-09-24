import {View} from "@react-pdf/renderer";
import {WithBorder, WithChildren, WithClassName, WithMargin, WithPadding} from "../../withs";
import css from "../../utils/css";
import marginClass, {
    marginBottomClass,
    marginLeftClass, marginRightClass,
    marginTopClass,
    marginXClass,
    marginYClass
} from "../../mappings/margins";
import paddingClass, {
    paddingBottomClass,
    paddingLeftClass, paddingRightClass,
    paddingTopClass,
    paddingXClass,
    paddingYClass
} from "../../mappings/paddings";
import borderClass, {
    borderBottomClass,
    borderLeftClass, borderRightClass,
    borderTopClass,
    borderXClass,
    borderYClass
} from "../../mappings/borders";

// noinspection JSUnusedLocalSymbols
export function Div({children, flex1 = false, wrap = false, b = 'none', full = false, bx, by, bt, bb, bl, br, p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr, className, col = false, row = undefined, flex, responsive}: DivProps) {
    if ('boolean' === typeof row) {
        col = !row;
    } else {
        col = 'undefined' === typeof col ? false : col;
    }
    flex = flex || flex1 || col || wrap;
    const style = css(
        className,
        paddingClass(p),
        paddingXClass(px),
        paddingYClass(py),
        paddingTopClass(pt),
        paddingBottomClass(pb),
        paddingLeftClass(pl),
        paddingRightClass(pr),
        marginClass(m),
        marginXClass(mx),
        marginYClass(my),
        marginTopClass(mt),
        marginBottomClass(mb),
        marginLeftClass(ml),
        marginRightClass(mr),
        borderClass(b),
        borderXClass(bx),
        borderYClass(by),
        borderTopClass(bt),
        borderBottomClass(bb),
        borderLeftClass(bl),
        borderRightClass(br),
        flex && 'flex',
        col && 'flex-col',
        full && 'w-full',
    );

    return (
        <View style={style}>
            {children}
        </View>
    );
}

export interface DivProps extends WithClassName, WithChildren, WithMargin, WithPadding, WithBorder {
    flex?: boolean;
    flex1?: boolean;
    wrap?: boolean;
    responsive?: boolean;
    col?: boolean;
    spacebetween?: boolean;
    row?: boolean;
    full?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default Div;
