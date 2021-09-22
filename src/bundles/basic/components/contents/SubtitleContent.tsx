import {View, StyleSheet, Text} from '@react-pdf/renderer';

const defaultClasses = {
    root: {
    },
    text: {
        fontSize: '16pt',
        fontWeight: 'bold',
    },
};

export function SubtitleContent({styles = {}, subtitle}: SubtitleContentProps) {
    const classes = StyleSheet.create(styles);

    return (
        <View style={[defaultClasses.root, classes.root]}>
            <Text style={[defaultClasses.text, classes.text]}>{subtitle}</Text>
        </View>
    )
}

export interface SubtitleContentProps {
    styles?: any;
    subtitle?: string;
}

export default SubtitleContent;