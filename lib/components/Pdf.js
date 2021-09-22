"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const renderer_1 = require("@react-pdf/renderer");
const Context_1 = __importDefault(require("../Context"));
const react_1 = require("react");
const contexts_1 = require("../contexts");
const Template_1 = __importDefault(require("./Template"));
const Pdf = ({ data = {}, config = {}, options = {} }) => {
    const pdfContext = (0, react_1.useMemo)(() => new Context_1.default(data, config, options), [options.bundles, data, config, options]);
    return ((0, jsx_runtime_1.jsx)(renderer_1.Document, { children: (0, jsx_runtime_1.jsx)(contexts_1.PdfProvider, Object.assign({ value: pdfContext }, { children: (0, jsx_runtime_1.jsx)(Template_1.default, Object.assign({}, config), void 0) }), void 0) }, void 0));
};
exports.Pdf = Pdf;
exports.default = exports.Pdf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGRmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUGRmLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsa0RBQTZDO0FBRTdDLHlEQUFpQztBQUNqQyxpQ0FBOEI7QUFDOUIsMENBQXdDO0FBQ3hDLDBEQUFrQztBQUUzQixNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQVcsRUFBRSxFQUFFO0lBQ3BFLE1BQU0sVUFBVSxHQUFHLElBQUEsZUFBTyxFQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFFOUcsT0FBTyxDQUNILHVCQUFDLG1CQUFRLGNBQ0wsdUJBQUMsc0JBQVcsa0JBQUMsS0FBSyxFQUFFLFVBQVUsZ0JBQzFCLHVCQUFDLGtCQUFRLG9CQUFLLE1BQU0sVUFBSSxZQUNkLFdBQ1AsQ0FDZCxDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBVlcsUUFBQSxHQUFHLE9BVWQ7QUFRRixrQkFBZSxXQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvY3VtZW50fSBmcm9tICdAcmVhY3QtcGRmL3JlbmRlcmVyJztcbmltcG9ydCB7ZGF0YSwgY29uZmlnLCBvcHRpb25zfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ29udGV4dFwiO1xuaW1wb3J0IHt1c2VNZW1vfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UGRmUHJvdmlkZXJ9IGZyb20gXCIuLi9jb250ZXh0c1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlXCI7XG5cbmV4cG9ydCBjb25zdCBQZGYgPSAoe2RhdGEgPSB7fSwgY29uZmlnID0ge30sIG9wdGlvbnMgPSB7fX06IFBkZlByb3BzKSA9PiB7XG4gICAgY29uc3QgcGRmQ29udGV4dCA9IHVzZU1lbW8oKCkgPT4gbmV3IENvbnRleHQoZGF0YSwgY29uZmlnLCBvcHRpb25zKSwgW29wdGlvbnMuYnVuZGxlcywgZGF0YSwgY29uZmlnLCBvcHRpb25zXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEb2N1bWVudD5cbiAgICAgICAgICAgIDxQZGZQcm92aWRlciB2YWx1ZT17cGRmQ29udGV4dH0+XG4gICAgICAgICAgICAgICAgPFRlbXBsYXRlIHsuLi5jb25maWd9IC8+XG4gICAgICAgICAgICA8L1BkZlByb3ZpZGVyPlxuICAgICAgICA8L0RvY3VtZW50PlxuICAgIClcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGRmUHJvcHMge1xuICAgIGRhdGE/OiBkYXRhO1xuICAgIGNvbmZpZz86IGNvbmZpZztcbiAgICBvcHRpb25zPzogb3B0aW9ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGRmIl19