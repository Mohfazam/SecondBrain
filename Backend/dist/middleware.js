"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usermiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const usermiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }
        const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
        const decoded = jsonwebtoken_1.default.verify(token, config_1.key);
        // Attach user info to request object
        //@ts-ignore
        req.userId = decoded.username;
        next();
    }
    catch (error) {
        return res.status(403).json({ error: "Unauthorized: Invalid or expired token" });
    }
};
exports.usermiddleware = usermiddleware;
