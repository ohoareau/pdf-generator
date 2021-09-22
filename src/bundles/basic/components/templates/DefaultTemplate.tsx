import {pages} from '../../../../types';
import Pages from "../../../../components/Pages";

export function DefaultTemplate({pages = []}: DefaultTemplateProps) {
    return <Pages pages={pages} />;
}

export interface DefaultTemplateProps {
    pages?: pages;
}

export default DefaultTemplate