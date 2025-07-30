import { Client } from "pg";

const client = new Client({
    host:"localhost",
    user:"postgres",
    password:"harshit",
    port:5432,
    database:"testDb"
})

export default client;