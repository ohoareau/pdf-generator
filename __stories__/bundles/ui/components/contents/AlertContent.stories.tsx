import {p, a, args} from '../../../../utils';
import AlertContent from '../../../../../src/bundles/ui/components/contents/AlertContent';
import data from "../../../../data";

// noinspection JSUnusedGlobalSymbols
export default {
    title: 'Bundles/Ui/Contents/Alert',
    component: AlertContent,
    argTypes: a({
        title: args.title,
    }),
};

export const basic = p(AlertContent, {
    title: data.common.title,
    m: 'xl',
});
