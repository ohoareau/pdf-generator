import {StyleSheet, View} from '@react-pdf/renderer';
import {content} from '../../../../types';
import {Contents} from "../../../../components";
import {useMemo} from "react";

const defaultClasses = {
    root: {
        display: 'flex',
        flexDirection: 'row',
    }
};

export function RowContent({styles = {}, cells = []}: RowContentProps) {
    const classes = StyleSheet.create(styles);
    const contentStyles = useMemo(() => cells.map(() => ({root: {flex: 1, margin: '2mm', padding: '4mm', border: '1mm solid black'}})), [cells]);

    return (
        <View style={[defaultClasses.root, classes.root]}>
            <Contents content={cells} contentStyles={contentStyles} />
        </View>
    )
}

export interface RowContentProps {
    styles?: any;
    cells?: content;
}

export default RowContent;