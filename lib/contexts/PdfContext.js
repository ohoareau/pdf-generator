"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfConsumer = exports.PdfProvider = void 0;
const react_1 = require("react");
const Context_1 = __importDefault(require("../Context"));
const PdfContext = (0, react_1.createContext)(new Context_1.default({}, {}, {}));
exports.PdfProvider = PdfContext.Provider;
exports.PdfConsumer = PdfContext.Consumer;
PdfContext.displayName = 'PdfContext';
exports.default = PdfContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGRmQ29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0cy9QZGZDb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGlDQUFzQztBQUV0Qyx5REFBaUM7QUFDakMsTUFBTSxVQUFVLEdBQUcsSUFBQSxxQkFBYSxFQUFvQixJQUFJLGlCQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLFFBQUEsV0FBVyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDbEMsUUFBQSxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztBQUMvQyxVQUFVLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztBQUN0QyxrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcGRmX2NvbnRleHRfdmFsdWUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ29udGV4dFwiO1xuY29uc3QgUGRmQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8cGRmX2NvbnRleHRfdmFsdWU+KG5ldyBDb250ZXh0KHt9LCB7fSwge30pKTtcbmV4cG9ydCBjb25zdCBQZGZQcm92aWRlciA9IFBkZkNvbnRleHQuUHJvdmlkZXI7XG5leHBvcnQgY29uc3QgUGRmQ29uc3VtZXIgPSBQZGZDb250ZXh0LkNvbnN1bWVyO1xuUGRmQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdQZGZDb250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IFBkZkNvbnRleHQ7XG4iXX0=