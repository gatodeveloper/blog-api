"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_1 = require("../middlewares/main");
const article_1 = __importDefault(require("./article"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => { res.status(200).send('Healthy OK'); });
router.use('/api/v1/articles', main_1.mainMiddleware, article_1.default);
exports.default = router;
