import express, { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { key } from './config';

const app = express();
app.use(express.json());


export const usermiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, key);
    if(decoded){
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({error: "Unauthorized"});
    }
}