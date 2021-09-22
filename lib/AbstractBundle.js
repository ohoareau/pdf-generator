"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractBundle = void 0;
const upperCamelCase_1 = __importDefault(require("./utils/upperCamelCase"));
class AbstractBundle {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    buildComponentName(type, name) {
        return (0, upperCamelCase_1.default)([name, type]);
    }
}
exports.AbstractBundle = AbstractBundle;
exports.default = AbstractBundle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RCdW5kbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQWJzdHJhY3RCdW5kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsNEVBQW9EO0FBRXBELE1BQXNCLGNBQWM7SUFFaEMsWUFBc0IsSUFBWTtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ1Msa0JBQWtCLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDbkQsT0FBTyxJQUFBLHdCQUFjLEVBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBR0o7QUFiRCx3Q0FhQztBQUVELGtCQUFlLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJQnVuZGxlIGZyb20gXCIuL0lCdW5kbGVcIjtcbmltcG9ydCB7Q29tcG9uZW50VHlwZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXBwZXJDYW1lbENhc2UgZnJvbSBcIi4vdXRpbHMvdXBwZXJDYW1lbENhc2VcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QnVuZGxlIGltcGxlbWVudHMgSUJ1bmRsZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYnVpbGRDb21wb25lbnROYW1lKHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB1cHBlckNhbWVsQ2FzZShbbmFtZSwgdHlwZV0pO1xuICAgIH1cbiAgICBhYnN0cmFjdCBnZXRDb21wb25lbnQodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBDb21wb25lbnRUeXBlPGFueT47XG4gICAgYWJzdHJhY3QgaGFzQ29tcG9uZW50KHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RCdW5kbGU7Il19