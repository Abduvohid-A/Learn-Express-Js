import pool from "../db/database.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import { createUser, getEmail } from "../db/queries.js";

export const forRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const checkData = Joi.object({
            username: Joi.string().min(4).required(),
            email: Joi.required(),
            password: Joi.string().min(4).required()
        });
        let { error, value } = checkData.validate({ username, email, password });

        if (error) return res.status(400).json({ error: error.details[0].message });

        const check = await pool.query(getEmail, [value.email]);
        console.log(check)
        if (check.rows[0]) return res.status(400).json({ status: "This user is already exist" })

        const hashedPassword = await bcrypt.hash(value.password, 10);
        const created_at = new Date()

        console.log(hashedPassword, created_at);
        const results = await pool.query(createUser, [value.username, value.email, hashedPassword, created_at]);
        console.log(results)
        res.status(201).send(results.rows)

    } catch (error) {
        res.status(500).json({ error: error.massage })
    }
};

export const forLogin = async (req, res) => {
    try {

        const { email, password } = req.body;
        const results = await pool.query(getEmail, [email]);
        if (results.rows.length === 0) return res.status(400).json({ status: "Email is incorrect" });

        const validPassword = await bcrypt.compare(password, results.rows[0].password);
        console.log(validPassword)
        if (!validPassword) return res.status(400).json({ status: "Incorrect password" });
        res.status(200).json({ status: "Seccessfull" })

    } catch (error) {
        res.status(500).json({ error: error.massage })
    }
};

/*
TEKSHIRISH UCHUN 

localhost:5000/api/login 
{
    "email": "azamat@gmail.com",
    "password": "1234qwer"
}

{
    "email": "abror@gmail.com",
    "password": "qwedfhj"
}



localhost:5000/api/register
{
    "username": "Nodir",
    "email": "nodir@gmail.com",
    "password": "12345zxc"
}

{
    "username": "Akmal",
    "email": "akmal@gmail.com",
    "password": "poiuytmn"
}

{
    "username": "Abror",
    "email": "abror@gmail.com",
    "password": "qwedfhj"
}

*/