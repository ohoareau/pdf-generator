import { pTemplate, a } from '../../../utils';
import DefaultTemplate from '../../../../src/bundles/basic/components/templates/DefaultTemplate';

export default {
    title: 'Editor',
    component: DefaultTemplate,
    argTypes: a({
        type: { control: { type: 'string' } },
        pages: { control: { type: 'object' } },
    }),
};

export const basic = pTemplate(props => {
    props = {...props, pages: Array.isArray(props.pages) ? props.pages : []};
    return <DefaultTemplate {...props} />
}, {});
