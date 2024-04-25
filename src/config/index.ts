import { connectDB } from "./db";

export const configInit = () => {
    connectDB();
}