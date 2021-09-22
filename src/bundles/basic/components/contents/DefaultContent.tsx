import {StyleSheet, Text} from '@react-pdf/renderer';

export function DefaultContent({styles = {}, componentType, componentName}: DefaultContentItemProps) {
    const classes = StyleSheet.create(styles);

    return (
        <Text style={classes.root}>UNKNOWN COMPONENT '{componentName || 'unknown'}' OF TYPE '{componentType || 'unknown'}'</Text>
    )
}

export interface DefaultContentItemProps {
    styles?: any;
    title?: string;
    componentType: string;
    componentName: string;
}

export default DefaultContent;