import applyCssClass from "./applyCssClass";

export function css(...args) {
    const {classNames, defaults} = args.reduce((acc, x) => {
        if (!x) return acc;
        if ('string' === typeof x) {
            acc['classNames'].push(x);
        } else {
            acc['defaults'] = {...acc['defaults'], ...x};
        }
        return acc;
    }, {classNames: [] as string[], defaults: {}})
    const className = classNames.join(' ');
    if (!className) return defaults;
    const cij = className.split(/\s+/g).reduce((acc, c) => applyCssClass(acc, c), {...defaults});
    console.log(cij);
    return cij;
}

// noinspection JSUnusedGlobalSymbols
export default css;