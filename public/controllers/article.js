"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticle = exports.postArticle = exports.getArticles = void 0;
const article_1 = __importDefault(require("../models/article"));
const getArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sites = yield article_1.default.find();
        res.json(sites);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getArticles = getArticles;
const postArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    try {
        const newArticle = yield article_1.default.create(payload);
        res.status(201).json(newArticle);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.postArticle = postArticle;
const getArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const slug = req.params.slug;
    try {
        const articles = yield article_1.default.findOne({ slug: slug });
        res.json(articles);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getArticle = getArticle;
