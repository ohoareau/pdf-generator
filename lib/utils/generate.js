"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importStar(require("path"));
const renderer_1 = require("@react-pdf/renderer");
const Pdf_1 = __importDefault(require("../components/Pdf"));
const BasicBundle_1 = require("../bundles/basic/BasicBundle");
const generate = async (data, config, target, options = {}) => {
    data = await prepareData(data);
    config = await prepareConfig(config);
    options = await prepareOptions(options);
    const buffer = await (0, renderer_1.pdf)((0, jsx_runtime_1.jsx)(Pdf_1.default, { data: data, config: config, options: options }, void 0)).toBuffer();
    return savePdfToTarget(target, buffer);
};
exports.generate = generate;
const fetchObject = async (data) => {
    if (!data)
        return {};
    if ('string' === typeof data)
        return require(path_1.default.resolve(data));
    if ('object' === typeof data)
        return data;
    return {};
};
const prepareData = async (data) => {
    return fetchObject(data);
};
const prepareConfig = async (config) => {
    return fetchObject(config);
};
const prepareOptions = async (options) => {
    const o = { ...options };
    o['bundles'] = o['bundles'] || [];
    o['bundles'].push(new BasicBundle_1.BasicBundle());
    return o;
};
const savePdfToTarget = async (target, buffer) => {
    return exportToLocalFileTarget(target, buffer);
};
const exportToLocalFileTarget = async (path, buffer) => {
    const parentDir = (0, path_1.dirname)(path);
    !fs_1.default.existsSync(parentDir) && fs_1.default.mkdirSync(parentDir, { recursive: true });
    const stream = fs_1.default.createWriteStream(path);
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
exports.default = exports.generate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZ2VuZXJhdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQW9CO0FBQ3BCLDZDQUFtQztBQUNuQyxrREFBd0M7QUFDeEMsNERBQW9DO0FBQ3BDLDhEQUF5RDtBQUVsRCxNQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFO0lBQ2pFLElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixNQUFNLEdBQUcsTUFBTSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxjQUFHLEVBQUMsdUJBQUMsYUFBRyxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxXQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxRixPQUFPLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFBO0FBTlksUUFBQSxRQUFRLFlBTXBCO0FBRUQsTUFBTSxXQUFXLEdBQUcsS0FBSyxFQUFDLElBQUksRUFBQyxFQUFFO0lBQzdCLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDckIsSUFBSSxRQUFRLEtBQUssT0FBTyxJQUFJO1FBQUUsT0FBTyxPQUFPLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLElBQUksUUFBUSxLQUFLLE9BQU8sSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzFDLE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQyxDQUFBO0FBRUQsTUFBTSxXQUFXLEdBQUcsS0FBSyxFQUFDLElBQUksRUFBQyxFQUFFO0lBQzdCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFHLEtBQUssRUFBQyxNQUFNLEVBQUMsRUFBRTtJQUNqQyxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDLEdBQUcsRUFBQyxHQUFHLE9BQU8sRUFBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxFQUFFLENBQUMsQ0FBQztJQUVyQyxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBNkIsRUFBRSxFQUFFO0lBRXBFLE9BQU8sdUJBQXVCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQztBQUVGLE1BQU0sdUJBQXVCLEdBQUcsS0FBSyxFQUFFLElBQVksRUFBRSxNQUE2QixFQUFFLEVBQUU7SUFDbEYsTUFBTSxTQUFTLEdBQUcsSUFBQSxjQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxZQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFlBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDeEUsTUFBTSxNQUFNLEdBQUcsWUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUMzQixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsZ0JBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoLCB7ZGlybmFtZX0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7cGRmfSBmcm9tIFwiQHJlYWN0LXBkZi9yZW5kZXJlclwiO1xuaW1wb3J0IFBkZiBmcm9tIFwiLi4vY29tcG9uZW50cy9QZGZcIjtcbmltcG9ydCB7QmFzaWNCdW5kbGV9IGZyb20gXCIuLi9idW5kbGVzL2Jhc2ljL0Jhc2ljQnVuZGxlXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZSA9IGFzeW5jIChkYXRhLCBjb25maWcsIHRhcmdldCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgZGF0YSA9IGF3YWl0IHByZXBhcmVEYXRhKGRhdGEpO1xuICAgIGNvbmZpZyA9IGF3YWl0IHByZXBhcmVDb25maWcoY29uZmlnKTtcbiAgICBvcHRpb25zID0gYXdhaXQgcHJlcGFyZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgcGRmKDxQZGYgZGF0YT17ZGF0YX0gY29uZmlnPXtjb25maWd9IG9wdGlvbnM9e29wdGlvbnN9Lz4pLnRvQnVmZmVyKCk7XG4gICAgcmV0dXJuIHNhdmVQZGZUb1RhcmdldCh0YXJnZXQsIGJ1ZmZlcik7XG59XG5cbmNvbnN0IGZldGNoT2JqZWN0ID0gYXN5bmMgZGF0YSA9PiB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm4ge307XG4gICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgZGF0YSkgcmV0dXJuIHJlcXVpcmUocGF0aC5yZXNvbHZlKGRhdGEpKTtcbiAgICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBkYXRhKSByZXR1cm4gZGF0YTtcbiAgICByZXR1cm4ge307XG59XG5cbmNvbnN0IHByZXBhcmVEYXRhID0gYXN5bmMgZGF0YSA9PiB7XG4gICAgcmV0dXJuIGZldGNoT2JqZWN0KGRhdGEpO1xufTtcblxuY29uc3QgcHJlcGFyZUNvbmZpZyA9IGFzeW5jIGNvbmZpZyA9PiB7XG4gICAgcmV0dXJuIGZldGNoT2JqZWN0KGNvbmZpZyk7XG59O1xuXG5jb25zdCBwcmVwYXJlT3B0aW9ucyA9IGFzeW5jIG9wdGlvbnMgPT4ge1xuICAgIGNvbnN0IG8gPSB7Li4ub3B0aW9uc307XG4gICAgb1snYnVuZGxlcyddID0gb1snYnVuZGxlcyddIHx8IFtdO1xuICAgIG9bJ2J1bmRsZXMnXS5wdXNoKG5ldyBCYXNpY0J1bmRsZSgpKTtcblxuICAgIHJldHVybiBvO1xufTtcblxuY29uc3Qgc2F2ZVBkZlRvVGFyZ2V0ID0gYXN5bmMgKHRhcmdldCwgYnVmZmVyOiBOb2RlSlMuUmVhZGFibGVTdHJlYW0pID0+IHtcbiAgICAvLyBmb3Igbm93LCBvbmx5IGV4cG9ydCB0byBsb2NhbCBmaWxlcy5cbiAgICByZXR1cm4gZXhwb3J0VG9Mb2NhbEZpbGVUYXJnZXQodGFyZ2V0LCBidWZmZXIpO1xufTtcblxuY29uc3QgZXhwb3J0VG9Mb2NhbEZpbGVUYXJnZXQgPSBhc3luYyAocGF0aDogc3RyaW5nLCBidWZmZXI6IE5vZGVKUy5SZWFkYWJsZVN0cmVhbSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudERpciA9IGRpcm5hbWUocGF0aCk7XG4gICAgIWZzLmV4aXN0c1N5bmMocGFyZW50RGlyKSAmJiBmcy5ta2RpclN5bmMocGFyZW50RGlyLCB7cmVjdXJzaXZlOiB0cnVlfSk7XG4gICAgY29uc3Qgc3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0ocGF0aCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGJ1ZmZlci5vbignZGF0YScsIGNodW5rID0+IHtcbiAgICAgICAgICAgIHN0cmVhbS53cml0ZShjaHVuayk7XG4gICAgICAgIH0pO1xuICAgICAgICBidWZmZXIub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHN0cmVhbS5jbG9zZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShwYXRoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZTsiXX0=