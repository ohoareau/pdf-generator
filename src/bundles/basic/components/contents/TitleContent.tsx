import {View, StyleSheet, Text} from '@react-pdf/renderer';

const defaultClasses = {
    root: {
    },
    text: {
        fontSize: '20pt',
        fontWeight: 'bold',
    },
};

export function TitleContent({styles = {}, title}: TitleContentProps) {
    const classes = StyleSheet.create(styles);

    return (
        <View style={[defaultClasses.root, classes.root]}>
            <Text style={[defaultClasses.text, classes.text]}>{title}</Text>
        </View>
    )
}

export interface TitleContentProps {
    styles?: any;
    title?: string;
}

export default TitleContent;