import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, () =>
    console.log(`Server running on Port: http://127.0.0.1:${PORT}`)
);
