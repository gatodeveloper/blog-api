"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configInit = void 0;
const db_1 = require("./db");
const configInit = () => {
    (0, db_1.connectDB)();
};
exports.configInit = configInit;
