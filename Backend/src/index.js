"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var express_1 = require("express");
var jsonwebtoken_1 = require("jsonwebtoken");
var key = "Hello_second_brain";
var app = (0, express_1.default)();
app.use(express_1.default.json());
var users = [];
var userSchema = zod_1.z.object({
    username: zod_1.z.string().min(3, "Username should be more than 3 letters"),
    password: zod_1.z.string().min(8, "Password must be at least 8 characters long").max(20, "Password cannot exceed 20 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
});
app.post("/signup", function (req, res) {
    try {
        var _a = userSchema.parse(req.body), username_1 = _a.username, password = _a.password;
        var userExist = users.some(function (users) { return users.username === username_1; });
        if (userExist) {
            res.status(403).send({ Message: "User already exists with this username" });
        }
        users.push({ username: username_1, password: password });
        res.status(200).send({ Message: "Sign Up successfull", username: username_1, password: password });
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
app.post("/login", function (req, res) {
    try {
        var _a = req.body, username_2 = _a.username, password_1 = _a.password;
        var userExist = users.find(function (user) { return user.username === username_2 && user.password === password_1; });
        if (!userExist) {
            res.status(403).send({ Message: "Wrong username or password" });
        }
        var token = jsonwebtoken_1.default.sign({ username: username_2 }, key);
        res.status(200).send({
            Message: "Signin Successfull",
            token: token
        });
    }
    catch (err) {
        res.status(500).send({ messaqge: "Internal server error" });
    }
});
app.listen(3000);
