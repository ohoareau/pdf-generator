import Section from './Section';
import Panel, { PanelProps } from './Panel';
import { WithMessage, WithTitle } from '../../withs';

export function Alert({ children, message, title, ...props }: AlertProps) {
    const content = children || message;

    return (
        <Panel row {...props}>
            <Section title={title}>{content}</Section>
        </Panel>
    );
}

export interface AlertProps extends PanelProps, WithMessage, WithTitle {}

// noinspection JSUnusedGlobalSymbols
export default Alert;
