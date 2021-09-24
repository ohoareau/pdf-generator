import Div from './Div';
import Text from './Text';
import { AsWrapper } from '../../as';
import { WithTitle } from '../../withs';
import Hr from "./Hr";

export function Section({ title, children }: SectionProps) {
    return (
        <Div>
            <Text text={title} variant={'sl'} />
            {!!title && !!children && <Hr className={'my-4'} />}
            {children || false}
        </Div>
    );
}

export interface SectionProps extends AsWrapper, WithTitle {}

// noinspection JSUnusedGlobalSymbols
export default Section;
