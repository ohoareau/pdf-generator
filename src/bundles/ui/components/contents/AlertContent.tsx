import Alert, {AlertProps} from '../atoms/Alert';

export function AlertContent(props: AlertContentProps) {
    return (
        <Alert {...props} />
    );
}

export interface AlertContentProps extends AlertProps {}

// noinspection JSUnusedGlobalSymbols
export default AlertContent;