import { p, a } from '../../../../utils';
import DefaultContent from '../../../../../src/bundles/basic/components/contents/DefaultContent';

// noinspection JSUnusedGlobalSymbols
export default {
    title: 'Bundles/Basic/Contents/Default',
    component: DefaultContent,
    argTypes: a({
    }),
};

export const basic = p(DefaultContent, {
});
