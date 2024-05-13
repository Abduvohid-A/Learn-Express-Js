import { Router } from "express";
import { getAllBooks, getOneBook, UpdateBook, createBook, deleteBook } from "../controllers/books.controller.js";
const router = new Router();

router.get("/", getAllBooks);
router.get("/:id", getOneBook);
router.put("/:id", UpdateBook);
router.post("/", createBook);
router.delete("/:id", deleteBook);

export default router;