import mongoose from "mongoose";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";

const getPosts = async(req, res)=>{
    try {
        
        const posts = await Post.find();
        res.status(200).send({posts});

    } catch (e) {
        console.log(e);
        res.status(500).send({error: e.message});
    }
}

const getUserPosts = async(req, res) =>{

    const {id} = req.body;

    try {
        
        const user = await User.findById(req.user._id);
        const user_id = user._id.toString();
        const posts = await Post.find({user_id});

        res.status(200).send({email: user.email, posts:posts});

    } catch (e) {
        console.log(e);
        res.status(404).send({error: e.message});       
    }
}

const addPost = async(req, res)=>{
    try {
        
        const {caption, body} = req.body;

        if(!caption){
            return res.status(400).send({error: "Caption is required"});
        }

        const user = await User.findById(req.user._id);

        const postDetails = {
            user_id : user._id,
            caption: caption,
            body: body        
        }

        const newPost = await Post.create(postDetails);
        console.log(caption);

        res.status(201).send({newPost});

    } catch (e) {
        //console.log(e);
        res.status(500).send({error: e.message});
    }
}

const deletePost  = async(req, res)=>{

    const {id} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).send({error: "Incorrect ID"});
    }

    const post = await Post.findById(id);
    if(!post){
        return res.status(404).send({error: "Post not found"});
    }

    else if(!post.user_id.equals(req.user._id)){
        return res.status(404).send({error: "This user does not own this post"});
    }

    else{
        try {
        
            await Post.findByIdAndDelete(id);
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

    const post = await Post.findById(id);
    console.log(post);
    if(!post){
        res.status(404).send({error: "Post not found"});
    }

    else if(!post.user_id.equals(req.user._id)){
        return res.status(404).send({error: "This user does not own this post"});
    }

    else{
        try {
        
            await Post.findByIdAndUpdate(id, {caption});
            res.status(200).send({message: "Post was updated"})
    
        } catch (e) {
            console.log(e);
            res.status(404).send({message: e.message});
        }
    }

}

export { addPost, getPosts, getUserPosts, deletePost, updatePost }