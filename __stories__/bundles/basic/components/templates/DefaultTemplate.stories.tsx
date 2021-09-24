import { pTemplate, a } from '../../../../utils';
import DefaultTemplate from '../../../../../src/bundles/basic/components/templates/DefaultTemplate';

export default {
    title: 'Bundles/Basic/Templates/Default',
    component: DefaultTemplate,
    argTypes: a({
    }),
};

export const basic = pTemplate(DefaultTemplate, {});
