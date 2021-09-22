"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const usePdfComponent_1 = require("../hooks/usePdfComponent");
function Page({ config, type }) {
    const Comp = (0, usePdfComponent_1.usePdfComponent)('page', type);
    return (0, jsx_runtime_1.jsx)(Comp, Object.assign({}, config, { componentType: 'page', componentName: type }), void 0);
}
exports.Page = Page;
exports.default = Page;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSw4REFBeUQ7QUFFekQsU0FBZ0IsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBWTtJQUMxQyxNQUFNLElBQUksR0FBRyxJQUFBLGlDQUFlLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTNDLE9BQU8sdUJBQUMsSUFBSSxvQkFBSyxNQUFNLElBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxZQUFJLENBQUE7QUFDM0UsQ0FBQztBQUpELG9CQUlDO0FBU0Qsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7dXNlUGRmQ29tcG9uZW50fSBmcm9tIFwiLi4vaG9va3MvdXNlUGRmQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQYWdlKHtjb25maWcsIHR5cGV9OiBQYWdlUHJvcHMpIHtcbiAgICBjb25zdCBDb21wID0gdXNlUGRmQ29tcG9uZW50KCdwYWdlJywgdHlwZSk7XG5cbiAgICByZXR1cm4gPENvbXAgey4uLmNvbmZpZ30gY29tcG9uZW50VHlwZT17J3BhZ2UnfSBjb21wb25lbnROYW1lPXt0eXBlfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VQcm9wcyB7XG4gICAgY2hpbGRyZW4/OiBhbnk7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBkYXRhPzogZGF0YTtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il19