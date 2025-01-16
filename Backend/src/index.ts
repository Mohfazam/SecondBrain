import { z } from "zod";
import express from "express";
import mongoose from "mongoose"
import  jwt  from "jsonwebtoken";

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

app.post("/api/v1/signup", (req, res) => {
    try{
        const {username, password} = userSchema.parse(req.body);

        const userExist = users.some((users) => users.username === username);

        if(userExist){
            res.status(403).send({Message:"User already exists with this username"});
        }

        users.push({username, password});

        res.status(200).send({Message: "Sign Up successfull", username, password});
    } catch(err){
        if(err instanceof z.ZodError){
            res.status(411).send({Message:" Error in inputs"});
        }
        else{
            res.status(500).send({Message:"internal Server Error"});
        }
    }
});

app.post("/api/v1/login", (req, res) => {
    try{
        const {username, password} = req.body;

    const userExist = users.find((user) => user.username === username && user.password === password);

    if(!userExist){
        res.status(403).send({Message: "Wrong username or password"});
    }

        const token = jwt.sign({username}, key);
        res.status(200).send({
            Message: "Signin Successfull",
            token
        });
    
    } catch(err){
        res.status(500).send({messaqge: "Internal server error"});
    }
});


app.post("/api/v1/content", (req, res)=> {

});

app.post("/api/v1/content", (req, res)=> {

});

app.get("/api/v1/secondbraib/:shareLink", (req, res)=> {

});


app.listen(3000);