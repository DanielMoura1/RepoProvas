"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routers/index"));
var server = (0, express_1["default"])();
server.use(express_1["default"].json());
server.use((0, cors_1["default"])());
server.use(index_1["default"]);
exports["default"] = server;
//server.listen(5000, () => console.log(`
//   Server running on port ${5000}.
//`));
//server.listen(process.env.PORT, () => console.log(`
//  Server running on port ${process.env.PORT}.
//`));
