"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.provaSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.provaSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    pdfUrl: joi_1["default"].string().required(),
    categoryId: joi_1["default"].number().required(),
    teacherDisciplineId: joi_1["default"].number().required()
});
