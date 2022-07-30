import express from "express";

import postController from "../controllers/postController.js";

const router = express.Router();

router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);
router.post("/", postController.createPost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
// router.patch("/:id/likePost", postController);

export default router;
