import { pPage, a } from '../../../../utils';
import DefaultPage from '../../../../../src/bundles/basic/components/pages/DefaultPage';

// noinspection JSUnusedGlobalSymbols
export default {
    title: 'Bundles/Basic/Pages/Default',
    component: DefaultPage,
    argTypes: a({
    }),
};

export const basic = pPage(DefaultPage, {});
