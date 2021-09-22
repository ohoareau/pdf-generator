import {StyleSheet, Page} from '@react-pdf/renderer';
import {PageFooter, PageHeader, PageContent} from "../../../../components";
import {content, header, footer} from '../../../../types';

const classes = StyleSheet.create({
    root: {
    },
});

export function DefaultPage({children, size = 'A4', header, footer, content, ...props}: PageProps) {
    return (
        <Page size={size} style={classes.root} {...props}>
            {header && <PageHeader {...header} />}
            {content && <PageContent content={content} />}
            {children || false}
            {footer && <PageFooter {...footer} />}
        </Page>
    );
}

export interface PageProps {
    children?: any;
    size?: string;
    header?: header;
    footer?: footer;
    content?: content;
}
export default DefaultPage