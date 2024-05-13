import { Router } from "express";
import { getCommit, postCommit } from "../controllers/comments.controller.js";
const router = new Router();

router.post("/comments", postCommit);
router.get("/comments", getCommit);

export default router;