"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const renderer_1 = require("@react-pdf/renderer");
const Contents_1 = __importDefault(require("./Contents"));
function PageHeader({ children, content, styles = {} }) {
    const classes = renderer_1.StyleSheet.create(styles);
    return (children || (content && (content.length > 0)))
        ? ((0, jsx_runtime_1.jsx)(renderer_1.View, Object.assign({ style: classes.root, fixed: true }, { children: (0, jsx_runtime_1.jsx)(Contents_1.default, Object.assign({ content: content }, { children: children || false }), void 0) }), void 0))
        : null;
}
exports.PageHeader = PageHeader;
exports.default = PageHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1BhZ2VIZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxrREFBcUQ7QUFFckQsMERBQWtDO0FBRWxDLFNBQWdCLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBa0I7SUFDeEUsTUFBTSxPQUFPLEdBQUcscUJBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFMUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FDRSx1QkFBQyxlQUFJLGtCQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssc0JBQzVCLHVCQUFDLGtCQUFRLGtCQUFDLE9BQU8sRUFBRSxPQUFPLGdCQUNyQixRQUFRLElBQUksS0FBSyxZQUNYLFlBQ1IsQ0FDVjtRQUNELENBQUMsQ0FBQyxJQUFJLENBQ0w7QUFDVCxDQUFDO0FBYkQsZ0NBYUM7QUFRRCxrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXcsIFN0eWxlU2hlZXR9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xuaW1wb3J0IHtjb250ZW50fSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBDb250ZW50cyBmcm9tICcuL0NvbnRlbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VIZWFkZXIoe2NoaWxkcmVuLCBjb250ZW50LCBzdHlsZXMgPSB7fX06IFBhZ2VIZWFkZXJQcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShzdHlsZXMpO1xuXG4gICAgcmV0dXJuIChjaGlsZHJlbiB8fCAoY29udGVudCAmJiAoY29udGVudC5sZW5ndGggPiAwKSkpXG4gICAgICAgID8gKFxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e2NsYXNzZXMucm9vdH0gZml4ZWQ+XG4gICAgICAgICAgICAgICAgPENvbnRlbnRzIGNvbnRlbnQ9e2NvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4gfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgPC9Db250ZW50cz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKVxuICAgICAgICA6IG51bGxcbiAgICAgICAgO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VIZWFkZXJQcm9wcyB7XG4gICAgY2hpbGRyZW4/OiBhbnk7XG4gICAgY29udGVudD86IGNvbnRlbnQ7XG4gICAgc3R5bGVzPzogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyOyJdfQ==