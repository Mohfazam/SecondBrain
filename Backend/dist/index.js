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
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const env = require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
mongoose_1.default.connect(MONGO_URL)
    .then(() => {
    console.log("Successfully connected to MongoDB");
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
});
const key = "Hello_second_brain";
// mongoose.connect(env)
const app = (0, express_1.default)();
app.use(express_1.default.json());
const users = [];
const userSchema = zod_1.z.object({
    username: zod_1.z.string().min(3, "Username should be more than 3 letters"),
    password: zod_1.z.string().min(8, "Password must be at least 8 characters long").max(20, "Password cannot exceed 20 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
});
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = userSchema.parse(req.body).username;
        const userExist = yield db_1.UserModel.findOne({ username });
        if (userExist) {
            res.status(411).json({ Error: "username already exists" });
        }
        const password = userSchema.parse(req.body).password;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        yield db_1.UserModel.create({ username, password });
        res.status(200).json({ message: "User created Successfully" });
    }
    catch (error) {
        res.status(400).json({ error });
    }
}));
app.post("/api/v1/signin", (req, res) => {
});
app.post("/api/v1/content", (req, res) => {
});
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/secondbraib/:shareLink", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.listen(3000);
