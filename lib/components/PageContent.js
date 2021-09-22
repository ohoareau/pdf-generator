"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Contents_1 = __importDefault(require("./Contents"));
function PageContent({ children, content }) {
    return ((0, jsx_runtime_1.jsx)(Contents_1.default, Object.assign({ content: content }, { children: children || false }), void 0));
}
exports.PageContent = PageContent;
exports.default = PageContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9QYWdlQ29udGVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDBEQUFrQztBQUdsQyxTQUFnQixXQUFXLENBQUMsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFtQjtJQUM3RCxPQUFPLENBQ0gsdUJBQUMsa0JBQVEsa0JBQUMsT0FBTyxFQUFFLE9BQU8sZ0JBQ3JCLFFBQVEsSUFBSSxLQUFLLFlBQ1gsQ0FDZCxDQUFDO0FBQ04sQ0FBQztBQU5ELGtDQU1DO0FBUUQsa0JBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRlbnRzIGZyb20gJy4vQ29udGVudHMnO1xuaW1wb3J0IHtjb250ZW50LCBkYXRhfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VDb250ZW50KHtjaGlsZHJlbiwgY29udGVudH06IFBhZ2VDb250ZW50UHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGVudHMgY29udGVudD17Y29udGVudH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW4gfHwgZmFsc2V9XG4gICAgICAgIDwvQ29udGVudHM+XG4gICAgKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlQ29udGVudFByb3BzIHtcbiAgICBjaGlsZHJlbj86IGFueTtcbiAgICBjb250ZW50PzogY29udGVudDtcbiAgICBkYXRhPzogZGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRlbnQ7Il19