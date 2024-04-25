"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const article_1 = require("../controllers/article");
const router = (0, express_1.Router)();
router.get('/', article_1.getArticles);
router.post('/', article_1.postArticle);
router.get('/:slug', article_1.getArticle);
exports.default = router;
