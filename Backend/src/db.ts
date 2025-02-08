import mongoose, { Schema } from "mongoose";
import { object } from "zod";

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const ContentSchema = new Schema({
    title: {type: String, required: true},
    link: {type: String, required: true},
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: true}
})

export const UserModel = mongoose.model("User", userSchema);
export const ContentModel = mongoose.model("Content", ContentSchema);