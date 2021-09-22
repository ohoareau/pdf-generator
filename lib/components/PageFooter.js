"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageFooter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const renderer_1 = require("@react-pdf/renderer");
const Contents_1 = __importDefault(require("./Contents"));
function PageFooter({ children, content, styles = {} }) {
    const classes = renderer_1.StyleSheet.create(styles);
    return (children || (content && (content.length > 0)))
        ? ((0, jsx_runtime_1.jsx)(renderer_1.View, Object.assign({ style: classes.root, fixed: true }, { children: (0, jsx_runtime_1.jsx)(Contents_1.default, Object.assign({ content: content }, { children: children || false }), void 0) }), void 0))
        : null;
}
exports.PageFooter = PageFooter;
exports.default = PageFooter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1BhZ2VGb290ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxrREFBcUQ7QUFFckQsMERBQWtDO0FBRWxDLFNBQWdCLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBa0I7SUFDeEUsTUFBTSxPQUFPLEdBQUcscUJBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFMUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FDRSx1QkFBQyxlQUFJLGtCQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssc0JBQzVCLHVCQUFDLGtCQUFRLGtCQUFDLE9BQU8sRUFBRSxPQUFPLGdCQUNyQixRQUFRLElBQUksS0FBSyxZQUNYLFlBQ1IsQ0FDVjtRQUNELENBQUMsQ0FBQyxJQUFJLENBQ1Q7QUFDTCxDQUFDO0FBYkQsZ0NBYUM7QUFRRCxrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXcsIFN0eWxlU2hlZXR9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xuaW1wb3J0IHtjb250ZW50fSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBDb250ZW50cyBmcm9tICcuL0NvbnRlbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VGb290ZXIoe2NoaWxkcmVuLCBjb250ZW50LCBzdHlsZXMgPSB7fX06IFBhZ2VGb290ZXJQcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShzdHlsZXMpO1xuXG4gICAgcmV0dXJuIChjaGlsZHJlbiB8fCAoY29udGVudCAmJiAoY29udGVudC5sZW5ndGggPiAwKSkpXG4gICAgICAgID8gKFxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e2NsYXNzZXMucm9vdH0gZml4ZWQ+XG4gICAgICAgICAgICAgICAgPENvbnRlbnRzIGNvbnRlbnQ9e2NvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4gfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgPC9Db250ZW50cz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKVxuICAgICAgICA6IG51bGxcbiAgICA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUZvb3RlclByb3BzIHtcbiAgICBjaGlsZHJlbj86IGFueTtcbiAgICBjb250ZW50PzogY29udGVudDtcbiAgICBzdHlsZXM/OiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VGb290ZXI7Il19