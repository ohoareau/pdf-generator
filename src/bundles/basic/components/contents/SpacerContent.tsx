import { View } from '@react-pdf/renderer';

export function SpacerContent({ height }: SpacerContentProps) {
    return (
        <View style={{height}} />
    )
}

export interface SpacerContentProps {
    height?: number | string;
}

export default SpacerContent;