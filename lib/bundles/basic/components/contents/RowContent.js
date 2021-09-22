"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const renderer_1 = require("@react-pdf/renderer");
const components_1 = require("../../../../components");
const react_1 = require("react");
const defaultClasses = {
    root: {
        display: 'flex',
        flexDirection: 'row',
    }
};
function RowContent({ styles = {}, cells = [] }) {
    const classes = renderer_1.StyleSheet.create(styles);
    const contentStyles = (0, react_1.useMemo)(() => cells.map(() => ({ root: { flex: 1, margin: '2mm', padding: '4mm', border: '1mm solid black' } })), [cells]);
    return ((0, jsx_runtime_1.jsx)(renderer_1.View, Object.assign({ style: [defaultClasses.root, classes.root] }, { children: (0, jsx_runtime_1.jsx)(components_1.Contents, { content: cells, contentStyles: contentStyles }, void 0) }), void 0));
}
exports.RowContent = RowContent;
exports.default = RowContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9idW5kbGVzL2Jhc2ljL2NvbXBvbmVudHMvY29udGVudHMvUm93Q29udGVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGtEQUFxRDtBQUVyRCx1REFBZ0Q7QUFDaEQsaUNBQThCO0FBRTlCLE1BQU0sY0FBYyxHQUFHO0lBQ25CLElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLEtBQUs7S0FDdkI7Q0FDSixDQUFDO0FBRUYsU0FBZ0IsVUFBVSxDQUFDLEVBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFrQjtJQUNqRSxNQUFNLE9BQU8sR0FBRyxxQkFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxNQUFNLGFBQWEsR0FBRyxJQUFBLGVBQU8sRUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFN0ksT0FBTyxDQUNILHVCQUFDLGVBQUksa0JBQUMsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUM1Qyx1QkFBQyxxQkFBUSxJQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLGFBQWEsV0FBSSxZQUN2RCxDQUNWLENBQUE7QUFDTCxDQUFDO0FBVEQsZ0NBU0M7QUFPRCxrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0eWxlU2hlZXQsIFZpZXd9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xuaW1wb3J0IHtjb250ZW50fSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQge0NvbnRlbnRzfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHt1c2VNZW1vfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgZGVmYXVsdENsYXNzZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSb3dDb250ZW50KHtzdHlsZXMgPSB7fSwgY2VsbHMgPSBbXX06IFJvd0NvbnRlbnRQcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShzdHlsZXMpO1xuICAgIGNvbnN0IGNvbnRlbnRTdHlsZXMgPSB1c2VNZW1vKCgpID0+IGNlbGxzLm1hcCgoKSA9PiAoe3Jvb3Q6IHtmbGV4OiAxLCBtYXJnaW46ICcybW0nLCBwYWRkaW5nOiAnNG1tJywgYm9yZGVyOiAnMW1tIHNvbGlkIGJsYWNrJ319KSksIFtjZWxsc10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgc3R5bGU9e1tkZWZhdWx0Q2xhc3Nlcy5yb290LCBjbGFzc2VzLnJvb3RdfT5cbiAgICAgICAgICAgIDxDb250ZW50cyBjb250ZW50PXtjZWxsc30gY29udGVudFN0eWxlcz17Y29udGVudFN0eWxlc30gLz5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3dDb250ZW50UHJvcHMge1xuICAgIHN0eWxlcz86IGFueTtcbiAgICBjZWxscz86IGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvd0NvbnRlbnQ7Il19