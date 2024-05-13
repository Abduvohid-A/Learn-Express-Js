import { Router } from "express";
import booksRouter from "./books.routes.js";
import authRouter from "./auth.routes.js";
import commitRouter from "./comments.routes.js";
const router = new Router();

router.use("/books", booksRouter);
router.use("/", authRouter);
router.use("/books/:id", commitRouter);
router.use("/books/:id", commitRouter);

export default router;