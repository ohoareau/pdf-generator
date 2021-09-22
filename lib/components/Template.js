"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const usePdfComponent_1 = require("../hooks/usePdfComponent");
function Template({ type, config }) {
    const Comp = (0, usePdfComponent_1.usePdfComponent)('template', type);
    return (0, jsx_runtime_1.jsx)(Comp, Object.assign({}, config), void 0);
}
exports.Template = Template;
exports.default = Template;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9UZW1wbGF0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDhEQUF5RDtBQUV6RCxTQUFnQixRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFnQjtJQUNsRCxNQUFNLElBQUksR0FBRyxJQUFBLGlDQUFlLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRS9DLE9BQU8sdUJBQUMsSUFBSSxvQkFBSyxNQUFNLFVBQUksQ0FBQTtBQUMvQixDQUFDO0FBSkQsNEJBSUM7QUFPRCxrQkFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVBkZkNvbXBvbmVudH0gZnJvbSBcIi4uL2hvb2tzL3VzZVBkZkNvbXBvbmVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVGVtcGxhdGUoe3R5cGUsIGNvbmZpZ306IFRlbXBsYXRlUHJvcHMpIHtcbiAgICBjb25zdCBDb21wID0gdXNlUGRmQ29tcG9uZW50KCd0ZW1wbGF0ZScsIHR5cGUpO1xuXG4gICAgcmV0dXJuIDxDb21wIHsuLi5jb25maWd9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVQcm9wcyB7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlOyJdfQ==