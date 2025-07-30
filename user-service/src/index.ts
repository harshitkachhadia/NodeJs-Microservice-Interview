import client from "./config/db";
import app from "./app";
const PORT = 3001;

client.connect()
    .then(() => {
        console.log("Database Connected !");
        app.listen(PORT,() => console.log(`Server Started on Port : ${PORT}`));
    })
    .catch(err => console.log(err));

    