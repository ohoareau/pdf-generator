"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pages = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Page_1 = __importDefault(require("./Page"));
function Pages({ pages = [] }) {
    !pages.length && (pages = [...pages]) && pages.push({});
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: pages.map((page, index) => ((0, jsx_runtime_1.jsx)(Page_1.default, Object.assign({ currentPage: index, totalPages: pages.length || 0 }, page), index))) }, void 0));
}
exports.Pages = Pages;
exports.default = Pages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9QYWdlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGtEQUEwQjtBQUcxQixTQUFnQixLQUFLLENBQUMsRUFBQyxLQUFLLEdBQUcsRUFBRSxFQUFrQjtJQUMvQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV4RCxPQUFPLENBQ0gsMkRBQ0ssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQ3hCLHVCQUFDLGNBQUksa0JBQWEsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQU0sSUFBSSxHQUFsRSxLQUFLLENBQWlFLENBQ3BGLENBQUMsV0FDSCxDQUNOLENBQUM7QUFDTixDQUFDO0FBVkQsc0JBVUM7QUFPRCxrQkFBZSxLQUFLLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlXCI7XG5pbXBvcnQge2RhdGEsIHBhZ2V9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VzKHtwYWdlcyA9IFtdfTogRGVmYXVsdFBkZlByb3BzKSB7XG4gICAgIXBhZ2VzLmxlbmd0aCAmJiAocGFnZXMgPSBbLi4ucGFnZXNdKSAmJiBwYWdlcy5wdXNoKHt9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxQYWdlIGtleT17aW5kZXh9IGN1cnJlbnRQYWdlPXtpbmRleH0gdG90YWxQYWdlcz17cGFnZXMubGVuZ3RoIHx8IDB9IHsuLi5wYWdlfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFBkZlByb3BzIHtcbiAgICBkYXRhPzogZGF0YTtcbiAgICBwYWdlcz86IHBhZ2VbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZXMiXX0=