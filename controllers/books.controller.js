import pool from "../db/database.js";
import Joi from "joi";
import {
    booksAll,
    bookOnly,
    addBook,
    userOnly,
    changeBook,
    delBook
} from "../db/queries.js";

export const getAllBooks = async (req, res) => {
    try {
        const result = await pool.query(booksAll)
        res.status(200).send({ status: "OK", data: result.rows });
    } catch (error) {
        res.status(500).json({ error: error.massage })
    }
};

export const getOneBook = async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query(bookOnly, [id])
        res.status(200).send({ status: "OK", data: result.rows });
    } catch (error) {
        res.status(500).json({ error: error.massage })
    }
};

export const UpdateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { publication_date } = req.body;

        const result = await pool.query(changeBook, [publication_date, id])
        res.status(200).send({ status: "OK", data: result.rows });
    } catch (error) {
        res.status(500).json({ error: error.massage })
    }
};


export const createBook = async (req, res) => {
    try {
        const checkData = Joi.object({
            title: Joi.string().min(4).required(),
            author: Joi.string().min(4).required(),
            publication_date: Joi.date().iso().required(),
            genre: Joi.string().min(5).required(),
            user_id: Joi.number().required()
        });

        const { error, value } = checkData.validate(req.body);
        if (error) return res.status(400).json({ status: "Bad request", error: error.details[0].message });

        const user_id = value.user_id;
        const user = await pool.query(userOnly, [user_id]);

        if (user.rows.length === 0) return res.status(400).json({ status: "Bunday user yo'q" });

        const values = [value.title, value.author, value.publication_date, value.genre, value.user_id];
        const result = await pool.query(addBook, values);

        res.status(201).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(delBook, [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ status: "Not Found" });
        }

        res.status(200).send(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};






