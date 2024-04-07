import mongoose from "mongoose";
import { Post } from "../models/post.model";

const getPosts = async(req, res)=>{
    try {
        
        const posts = await Post.find();
        res.status(200).send(posts);

    } catch (e) {
        console.log(e);
        res.status(500).send({message: e.message});
    }
}

const addPost = async(req, res)=>{
    try {
        
        const {name, caption, type, year} = req.body;

        if(!name){
            res.status(400).send({error: "Name is required"});
        }

        const postDetails = {
            name: name,
            caption: caption,
            type: type,
            year : year
        }

        const newPost = await Post.create(postDetails);
        console.log(name, caption, type, year);

        res.status(201).send(newPost);

    } catch (e) {
        console.log(e);
        res.status(500).send({message: e.message});
    }
}

const deletePost  = async(req, res)=>{

    const {id} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).send({error: "Incorrect ID"});
    }

    const post = await Post.findById(id);
    if(!post){
        res.status(404).send({error: "Post not found"});
    }

    else{
        try {
        
            await Post.deleteOne();
            res.status(200).send({message: "Post was deleted"})
    
        } catch (e) {
            console.log(e);
            res.status(500).send({message: e.message});
        }
    }

}

const updatePost  = async(req, res)=>{

    const {id, caption} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).send({error: "Incorrect ID"});
    }
    console.log(id);

    const post = await Post.findById(id);
    console.log(post);
    if(!post){
        res.status(404).send({error: "Post not found"});
    }

    else{
        try {
        
            await Post.findByIdAndUpdate(id, {caption});
            res.status(200).send({message: "Post was updated"})
    
        } catch (e) {
            console.log(e);
            res.status(500).send({message: e.message});
        }
    }

}

export { addPost, getPosts, deletePost, updatePost }