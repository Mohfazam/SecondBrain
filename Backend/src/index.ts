import { z } from "zod";
import express from "express";
import mongoose from "mongoose"
import  jwt  from "jsonwebtoken";
import {UserModel} from "./db";

const key = "Hello_second_brain";


const app = express();

app.use(express.json());

const users:{username:string; password:string}[] = [];

const userSchema = z.object({
    username: z.string().min(3, "Username should be more than 3 letters"),
    password: z.string().min(8, "Password must be at least 8 characters long").max(20, "Password cannot exceed 20 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        )
})

app.post("/api/v1/signup", async (req, res) => {
    const username = userSchema.parse(req.body).username;
    const password = userSchema.parse(req.body).password;
    await UserModel.create({username, password})
});

app.post("/api/v1/signin", (req, res) => {
    
});


app.post("/api/v1/content", (req, res)=> {

});

app.post("/api/v1/content", (req, res)=> {

});

app.get("/api/v1/secondbraib/:shareLink", (req, res)=> {

});

app.delete("/api/v1/content", (req, res)=> {

});


app.listen(3000);