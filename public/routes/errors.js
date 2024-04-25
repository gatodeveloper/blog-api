"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const error404 = (req, res, next) => {
    const error = new Error('Not Found');
    res.status(404).json({ message: error.message });
};
const error500 = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
};
router.use(error404);
router.use(error500);
exports.default = router;
