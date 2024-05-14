import pool from "../db/database.js";
import { allComments } from "../db/queries.js";

export const getCommit = async (req, res) => {
    try {
        const result = await pool.query(allComments)
        res.status(200).send({ status: "OK", data: result.rows });
    } catch (error) {
        res.status(500).json({ error: error.massage })
    }
};

export const postCommit = async (req, res) => {
    // try {
    //     const result = await pool.query()
    //     res.status(200).send({ status: "OK", data: result.rows });
    // }catch (error) {
    //     res.status(500).json({ error : error.massage })
    // }
};