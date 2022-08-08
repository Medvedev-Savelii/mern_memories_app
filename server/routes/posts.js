import express from "express";
import postController from "../controllers/postController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/", auth, postController.createPost);
router.patch("/:id", auth, postController.updatePost);
router.delete("/:id", auth, postController.deletePost);
router.patch("/:id/likePost", auth, postController.likePost);

export default router;
