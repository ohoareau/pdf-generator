export function upperCamelCase(name: undefined|string|(string|undefined)[]) {
    return (('string' === typeof name) ? [name] : (name || [])).filter(x => !!x).map(name => `${(name || '').slice(0, 1).toUpperCase()}${(name || '').slice(1)}`).join('');
}

export default upperCamelCase;