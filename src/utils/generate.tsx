import fs from "fs";
import path, {dirname} from "path";
import {pdf} from "@react-pdf/renderer";
import Pdf from "../components/Pdf";
import debug from 'debug';

const debugPdfPrepare = debug('pdf:prepare');

export const generate = async (data, config, target, options = {}) => {
    data = await prepareData(data);
    debugPdfPrepare('data %j', data);
    config = await prepareConfig(config);
    debugPdfPrepare('config %j', config);
    options = await prepareOptions(options);
    debugPdfPrepare('options %j', options);
    const buffer = await pdf(<Pdf data={data} config={config} options={options}/>).toBuffer();
    debugPdfPrepare('target %s', target);
    return savePdfToTarget(target, buffer);
}

const fetchObject = async data => {
    if (!data) return {};
    if ('string' === typeof data) return require(path.resolve(data));
    if ('object' === typeof data) return data;
    return {};
}

const prepareData = async data => {
    return fetchObject(data);
};

const prepareConfig = async config => {
    return fetchObject(config);
};

const prepareOptions = async options => {
    return {...options};
};

const savePdfToTarget = async (target, buffer: NodeJS.ReadableStream) => {
    // for now, only export to local files.
    return exportToLocalFileTarget(target, buffer);
};

const exportToLocalFileTarget = async (path: string, buffer: NodeJS.ReadableStream) => {
    const parentDir = dirname(path);
    !fs.existsSync(parentDir) && fs.mkdirSync(parentDir, {recursive: true});
    const stream = fs.createWriteStream(path);
    return new Promise((resolve) => {
        buffer.on('data', chunk => {
            stream.write(chunk);
        });
        buffer.on('end', () => {
            stream.close();
            resolve(path);
        });
    });
};

export default generate;