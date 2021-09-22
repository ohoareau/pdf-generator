import generate from "./generate";
import {options} from '../types';

export async function cli(options: options = {}) {
    if (4 > process.argv.length) {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error(`Syntax: node cli.js <data> <config> <output>`);
    }

    return generate(process.argv[2], process.argv[3], process.argv[4], options)
}

export default cli;