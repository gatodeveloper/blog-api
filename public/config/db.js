"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => {
    mongoose_1.default.connect(process.env.MONGODB_URI || '', {}).then(() => {
        console.log('MongoDB Connected');
    }).catch((error) => { console.error('Error connecting MongoDB:', error); });
};
exports.connectDB = connectDB;
