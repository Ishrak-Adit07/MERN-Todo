import express from 'express'
import { addPost, deletePost, getPosts, updatePost } from '../controllers/post.controller';
const router = express.Router();

router.post("/", addPost);

router.get("/", getPosts);

router.delete("/", deletePost);

router.put("/", updatePost);

export default router;