import Div, { DivProps } from './Div';

export function Panel({ col = true, ...props }: PanelProps) {
    return <Div col={col} flex p={'md'} responsive={false} spacebetween {...props} />;
}

export type PanelProps = DivProps;

// noinspection JSUnusedGlobalSymbols
export default Panel;
