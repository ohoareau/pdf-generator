const mappings = {
    m: {
        '0': 0,
        '1': '1mm',
        '2': '2mm',
        '3': '4cm',
        '4': '1cm',
        '5': '2cm',
        '6': '3cm',
        '7': '4cm',
        '8': '5cm',
        '9': '6cm',
    },
    p: {
        '0': 0,
        '1': '1mm',
        '2': '2mm',
        '3': '4cm',
        '4': '1cm',
        '5': '2cm',
        '6': '3cm',
        '7': '4cm',
        '8': '5cm',
        '9': '6cm',
    },
    b: {
        '0': 0,
        '1': '1pt solid #000000',
        '2': '2pt solid #000000',
        '3': '4pt solid #000000',
        '4': '8pt solid #000000',
        '5': '10pt solid #000000',
        '6': '12pt solid #000000',
        '7': '14pt solid #000000',
        '8': '16pt solid #000000',
        '9': '20pt solid #000000',
    }
}

export function u(type: string, value: number|string) {
    const v: string = 'number' === typeof value ? String(value) : value;

    return (mappings[type] || {})[v] || undefined;
}

export default u;