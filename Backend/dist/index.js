"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const key = "Hello_second_brain";
const app = (0, express_1.default)();
app.use(express_1.default.json());
const users = [];
const userSchema = zod_1.z.object({
    username: zod_1.z.string().min(3, "Username should be more than 3 letters"),
    password: zod_1.z.string().min(8, "Password must be at least 8 characters long").max(20, "Password cannot exceed 20 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
});
app.post("/signup", (req, res) => {
    try {
        const { username, password } = userSchema.parse(req.body);
        const userExist = users.some((users) => users.username === username);
        if (userExist) {
            res.status(403).send({ Message: "User already exists with this username" });
        }
        users.push({ username, password });
        res.status(200).send({ Message: "Sign Up successfull", username, password });
    }
    catch (err) {
        if (err instanceof zod_1.z.ZodError) {
            res.status(411).send({ Message: " Error in inputs" });
        }
        else {
            res.status(500).send({ Message: "internal Server Error" });
        }
    }
});
app.post("/login", (req, res) => {
    try {
        const { username, password } = req.body;
        const userExist = users.find((user) => user.username === username && user.password === password);
        if (!userExist) {
            res.status(403).send({ Message: "Wrong username or password" });
        }
        const token = jsonwebtoken_1.default.sign({ username }, key);
        res.status(200).send({
            Message: "Signin Successfull",
            token
        });
    }
    catch (err) {
        res.status(500).send({ messaqge: "Internal server error" });
    }
});
app.listen(3000);
