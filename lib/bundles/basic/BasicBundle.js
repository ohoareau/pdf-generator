"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicBundle = void 0;
const AbstractBundle_1 = __importDefault(require("../../AbstractBundle"));
const templates = __importStar(require("./components/templates"));
const pages = __importStar(require("./components/pages"));
const contents = __importStar(require("./components/contents"));
class BasicBundle extends AbstractBundle_1.default {
    constructor() {
        super('basic');
        this.components = {
            template: templates,
            page: pages,
            content: contents,
        };
    }
    getComponent(type, name) {
        return this.components[type][this.buildComponentName(type, name)];
    }
    hasComponent(type, name) {
        return !!(this.components[type] || {})[this.buildComponentName(type, name)];
    }
}
exports.BasicBundle = BasicBundle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNCdW5kbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnVuZGxlcy9iYXNpYy9CYXNpY0J1bmRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMEVBQWtEO0FBQ2xELGtFQUFvRDtBQUNwRCwwREFBNEM7QUFDNUMsZ0VBQWtEO0FBRWxELE1BQWEsV0FBWSxTQUFRLHdCQUFjO0lBRTNDO1FBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNkLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLFFBQVE7U0FDcEIsQ0FBQztJQUNOLENBQUM7SUFDRCxZQUFZLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDbkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsWUFBWSxDQUFDLElBQVksRUFBRSxJQUFZO1FBQ25DLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztDQUVKO0FBakJELGtDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50VHlwZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWJzdHJhY3RCdW5kbGUgZnJvbSBcIi4uLy4uL0Fic3RyYWN0QnVuZGxlXCI7XG5pbXBvcnQgKiBhcyB0ZW1wbGF0ZXMgZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcyc7XG5pbXBvcnQgKiBhcyBwYWdlcyBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMnO1xuaW1wb3J0ICogYXMgY29udGVudHMgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnRzJztcblxuZXhwb3J0IGNsYXNzIEJhc2ljQnVuZGxlIGV4dGVuZHMgQWJzdHJhY3RCdW5kbGUge1xuICAgIHByb3RlY3RlZCBjb21wb25lbnRzOiB7W2tleTogc3RyaW5nXTogQ29tcG9uZW50VHlwZTxhbnk+fTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Jhc2ljJyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZXMsXG4gICAgICAgICAgICBwYWdlOiBwYWdlcyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRDb21wb25lbnQodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1t0eXBlXVt0aGlzLmJ1aWxkQ29tcG9uZW50TmFtZSh0eXBlLCBuYW1lKV07XG4gICAgfVxuICAgIGhhc0NvbXBvbmVudCh0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEodGhpcy5jb21wb25lbnRzW3R5cGVdIHx8IHt9KVt0aGlzLmJ1aWxkQ29tcG9uZW50TmFtZSh0eXBlLCBuYW1lKV07XG4gICAgfVxuXG59Il19