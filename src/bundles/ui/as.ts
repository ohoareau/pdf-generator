import {
    WithChildren,
    WithStyles,
} from './withs';

export type AsComponent = WithStyles;

export interface AsWrapper extends AsComponent, WithChildren {}
