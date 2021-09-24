import {st, argtypes} from '@genstackio/react-storybook';
import PdfScreen from "../src/bundles/basic/PdfScreen";

function Provider(args) {
    return (
        <>
            {args.children}
        </>
    );
}

export function a(x: any = {}) {
    return {
        ...x,
    };
}

export function s(Component, args, opts: any = {}) {
    return st(
        Component,
        {
            ...args,
        },
        {
            ...opts,
            provider: Provider,
            providerProps: {
            },
        },
    );
}

export function p(Component, args, opts: any = {}) {
    return s(props => {
        return (
            <PdfScreen orientation={opts['orientation']} pageSize={opts['pageSize']} page={false !== opts['page']}>
                <Component {...props} />
            </PdfScreen>
        )}, args
    , opts);
}

export function pTemplate(Component, args, opts: any = {}) {
    return p(Component, args, {page: false, ...opts});
}

export function pPage(Component, args, opts: any = {}) {
    return p(Component, args, {page: false, ...opts});
}

export const args = {
    ...argtypes,
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
};
