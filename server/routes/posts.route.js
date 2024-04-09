import express from 'express'
import { addPost, deletePost, getPosts, getUserPosts, updatePost } from '../controllers/post.controller';
import auth from '../middlewares/auth.mw';
const router = express.Router();


router.get("/", getPosts);

router.get("/user", auth, getUserPosts);

router.post("/", auth, addPost);

router.delete("/", auth, deletePost);

router.put("/", auth, updatePost);

export default router;