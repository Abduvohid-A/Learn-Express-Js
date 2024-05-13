import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

const pool = new Pool({
    user : process.env.DATABASE_USERNAME,
    host : process.env.DATABASE_HOST,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
    port : process.env.DATABASE_PORT=5432
});

pool.connect( err => {
    if (err)
        console.log(err)
    else {
        console.log("Postgres  ulandi")
    }
});

export default pool;