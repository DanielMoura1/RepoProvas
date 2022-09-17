"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.usuarioSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.usuarioSchema = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    senha: joi_1["default"].string().required(),
    senha2: joi_1["default"].ref('senha')
});
