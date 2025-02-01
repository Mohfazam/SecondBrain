import { z } from "zod";
import express from "express";
import mongoose from "mongoose"
import  jwt  from "jsonwebtoken";
import {UserModel} from "./db";
import bcrypt from "bcrypt";
import e from "express";

const env = require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL as string;

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const key = "Hello_second_brain";

// mongoose.connect(env)

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
    try{
        const username = userSchema.parse(req.body).username;
        const userExist = await UserModel.findOne({username});
        if(userExist){
            res.status(411).json({Error: "username already exists"});
        }
        const password = userSchema.parse(req.body).password;
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({username, password:hashedPassword});
    res.status(200).json({message: "User created Successfully"})
    }catch(error){
        res.status(400).json({error});
    }
});

app.post("/api/v1/signin", async (req, res) => {
    try{
        const username = userSchema.parse(req.body).username;
        const password = userSchema.parse(req.body).password;

    const user = await UserModel.findOne({username});
    if(!user){
        res.status(404).json({Message:"User not found"});
    }
    if(user){
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(isPasswordMatch){
            const token = jwt.sign({username}, key);
            res.status(200).json({
                Message:"User signed in successfulyy",
                token: token
            });
        }
        else{
            res.status(401).json({Message:"Incorrect Password"});
        }
    }
    }
    catch(error){
        res.status(500).json({Msg:"Internal server error"});
    }

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