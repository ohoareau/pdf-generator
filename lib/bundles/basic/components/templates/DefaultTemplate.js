"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Pages_1 = __importDefault(require("../../../../components/Pages"));
function DefaultTemplate({ pages = [] }) {
    return (0, jsx_runtime_1.jsx)(Pages_1.default, { pages: pages }, void 0);
}
exports.DefaultTemplate = DefaultTemplate;
exports.default = DefaultTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdFRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2J1bmRsZXMvYmFzaWMvY29tcG9uZW50cy90ZW1wbGF0ZXMvRGVmYXVsdFRlbXBsYXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EseUVBQWlEO0FBRWpELFNBQWdCLGVBQWUsQ0FBQyxFQUFDLEtBQUssR0FBRyxFQUFFLEVBQXVCO0lBQzlELE9BQU8sdUJBQUMsZUFBSyxJQUFDLEtBQUssRUFBRSxLQUFLLFdBQUksQ0FBQztBQUNuQyxDQUFDO0FBRkQsMENBRUM7QUFNRCxrQkFBZSxlQUFlLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BhZ2VzfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgUGFnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvUGFnZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIERlZmF1bHRUZW1wbGF0ZSh7cGFnZXMgPSBbXX06IERlZmF1bHRUZW1wbGF0ZVByb3BzKSB7XG4gICAgcmV0dXJuIDxQYWdlcyBwYWdlcz17cGFnZXN9IC8+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRUZW1wbGF0ZVByb3BzIHtcbiAgICBwYWdlcz86IHBhZ2VzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0VGVtcGxhdGUiXX0=