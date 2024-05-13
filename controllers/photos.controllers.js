import pool from "../db/database.js";
import { allPhotos } from "../db/queries.js";

export const getPhotos = async (req, res) => {
    try {
        const results = await pool.query(allPhotos)
        res.status(200).send({ status: "OK", data: results.rows });
    }catch (error) {
        res.status(500).json({ error : error.massage })
    }
};

export const postPhotos = async (req, res) => {
    // try {
    //     const result = await pool.query()
    //     res.status(200).send({ status: "OK", data: result.rows });
    // }catch (error) {
    //     res.status(500).json({ error : error.massage })
    // }
};