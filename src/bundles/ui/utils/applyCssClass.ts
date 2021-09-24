import u from "./u";

export function applyCssClass(x: any, c: string) {
    const [cc, ...t] = c.split('-');
    let ccc: string = '';
    let tt: string[] = [];
    switch (cc) {
        case 'uppercase': return {...x, textTransform: 'uppercase'};
        case 'lowercase': return {...x, textTransform: 'lowercase'};
        case 'text':
            [ccc] = (-1 !== ((t.length ? t[0] : '').indexOf('-'))) ? t : ['', ...t];
            switch (ccc) {
                case 'center': return {...x, align: 'center'};
                default: return {...x};
            }
        case 'font':
            [ccc] = (-1 !== ((t.length ? t[0] : '').indexOf('-'))) ? t : ['', ...t];
            switch (ccc) {
                case 'bold': return {...x, fontWeight: 700};
                default: return {...x};
            }
        // margins
        case 'mx': return {...x, marginLeft: u('m', t[0]), marginRight: u('m', t[0])};
        case 'my': return {...x, marginTop: u('m', t[0]), marginBottom: u('m', t[0])};
        case 'mt': return {...x, marginTop: u('m', t[0])};
        case 'mb': return {...x, marginBottom: u('m', t[0])};
        case 'ml': return {...x, marginLeft: u('m', t[0])};
        case 'mr': return {...x, marginRight: u('m', t[0])};
        case 'm': return {...x, marginLeft: u('m', t[0]), marginRight: u('m', t[0]), marginTop: u('m', t[0]), marginBottom: u('m', t[0])};
        // paddings
        case 'px': return {...x, paddingLeft: u('m', t[0]), paddingRight: u('m', t[0])};
        case 'py': return {...x, paddingTop: u('m', t[0]), paddingBottom: u('m', t[0])};
        case 'pt': return {...x, paddingTop: u('m', t[0])};
        case 'pb': return {...x, paddingBottom: u('m', t[0])};
        case 'pl': return {...x, paddingLeft: u('m', t[0])};
        case 'pr': return {...x, paddingRight: u('m', t[0])};
        case 'p': return {...x, paddingLeft: u('m', t[0]), paddingRight: u('m', t[0]), paddingTop: u('m', t[0]), paddingBottom: u('m', t[0])};
        // borders
        case 'border':
            [ccc, ...tt] = (-1 !== ((t.length ? t[0] : '').indexOf('-'))) ? t : ['', ...t];
            switch(ccc) {
                case 'x': return {...x, borderLeft: u('b', tt[0]), borderRight: u('b', tt[0])};
                case 'y': return {...x, borderTop: u('b', tt[0]), borderBottom: u('b', tt[0])};
                case 't': return {...x, borderTop: u('b', tt[0])};
                case 'b': return {...x, borderBottom: u('b', tt[0])};
                case 'l': return {...x, borderLeft: u('b', tt[0])};
                case 'r': return {...x, borderRight: u('b', tt[0])};
                case '': return {...x, borderLeft: u('b', tt[0]), borderRight: u('b', tt[0]), borderTop: u('b', tt[0]), borderBottom: u('b', tt[0])};
                default: return {...x};
            }
        // flex
        case 'flex': return {...x, display: 'flex'};
        case 'flex-col': return {...x, flexDirection: 'column'};
        case 'flex-row': return {...x, flexDirection: 'row'};
        default: return {...x};
    }
}

// noinspection JSUnusedGlobalSymbols
export default applyCssClass;