import {View, StyleSheet} from '@react-pdf/renderer';
import {content} from "../types";
import Contents from './Contents';

export function PageHeader({children, content, styles = {}}: PageHeaderProps) {
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

export interface PageHeaderProps {
    children?: any;
    content?: content;
    styles?: any;
}

export default PageHeader;