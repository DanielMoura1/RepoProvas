"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var index_1 = __importDefault(require("./index"));
exports["default"] = index_1["default"];
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
index_1["default"].listen(process.env.PORT, function () { return console.log("\n  Server running on port ".concat(process.env.PORT, ".\n")); });
