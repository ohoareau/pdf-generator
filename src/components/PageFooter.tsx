import {View, StyleSheet} from '@react-pdf/renderer';
import {content} from "../types";
import Contents from './Contents';

export function PageFooter({children, content, styles = {}}: PageFooterProps) {
    const classes = StyleSheet.create(styles);

    return (children || (content && (content.length > 0)))
        ? (
            <View style={classes.root} fixed>
                <Contents content={content}>
                    {children || false}
                </Contents>
            </View>
        )
        : null
    ;
}

export interface PageFooterProps {
    children?: any;
    content?: content;
    styles?: any;
}

export default PageFooter;