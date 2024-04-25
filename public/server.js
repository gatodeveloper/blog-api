"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const main_1 = require("./middlewares/main");
const errors_1 = __importDefault(require("./routes/errors"));
const config_1 = require("./config");
dotenv_1.default.config();
const PORT = parseInt(process.env.PORT) || 3000;
const app = (0, express_1.default)();
(0, config_1.configInit)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', main_1.mainMiddleware, routes_1.default);
app.use(errors_1.default);
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
