"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function WorkflowCard({ img, title, children, }) {
    return (react_1.default.createElement("article", null,
        react_1.default.createElement("img", { src: img.src, alt: img.alt }),
        react_1.default.createElement("h2", null, title),
        children));
}
exports.default = WorkflowCard;
