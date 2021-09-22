import {View, StyleSheet, Text} from '@react-pdf/renderer';

export function TitleContent({styles = {}, title}: TitleContentProps) {
    const classes = StyleSheet.create(styles);

    console.log(classes, styles);
    return (
        <View style={classes.root}>
            <Text style={classes.text}>{title}</Text>
        </View>
    )
}

export interface TitleContentProps {
    styles?: any;
    title?: string;
}

export default TitleContent;