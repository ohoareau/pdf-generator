"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePdfComponent = void 0;
const usePdfContext_1 = __importDefault(require("./usePdfContext"));
function usePdfComponent(type, name, defaultName = 'default') {
    return (0, usePdfContext_1.default)().getComponent(type, name || defaultName, defaultName);
}
exports.usePdfComponent = usePdfComponent;
exports.default = usePdfComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlUGRmQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZVBkZkNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvRUFBNEM7QUFFNUMsU0FBZ0IsZUFBZSxDQUFDLElBQVksRUFBRSxJQUFzQixFQUFFLGNBQXNCLFNBQVM7SUFDakcsT0FBTyxJQUFBLHVCQUFhLEdBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDaEYsQ0FBQztBQUZELDBDQUVDO0FBRUQsa0JBQWUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVBkZkNvbnRleHQgZnJvbSBcIi4vdXNlUGRmQ29udGV4dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGRmQ29tcG9uZW50KHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nfHVuZGVmaW5lZCwgZGVmYXVsdE5hbWU6IHN0cmluZyA9ICdkZWZhdWx0Jykge1xuICAgIHJldHVybiB1c2VQZGZDb250ZXh0KCkuZ2V0Q29tcG9uZW50KHR5cGUsIG5hbWUgfHwgZGVmYXVsdE5hbWUsIGRlZmF1bHROYW1lKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUGRmQ29tcG9uZW50OyJdfQ==