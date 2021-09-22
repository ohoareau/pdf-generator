import {View, StyleSheet, Image} from '@react-pdf/renderer';
import {useMemo} from "react";
import QuickChart from 'quickchart-js';

export function ChartContent({styles = {}, options = {}, width = '15cm', height = '8cm'}: ChartContentProps) {
    const classes = StyleSheet.create(styles);

    const chart = useMemo(() => {
        const c = new QuickChart();
        c.setConfig(options);
        return c;
    }, [options])

    return (
        <View style={classes.root}>
            <Image style={{width, height}} src={chart.getUrl()}/>
        </View>
    )
}

export interface ChartContentProps {
    styles?: any;
    width?: string|number;
    height?: string|number;
    options?: any;
}

export default TitleContent;