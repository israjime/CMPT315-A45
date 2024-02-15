import express from "express";
import bodyParser from "body-parser";
import monsters from "./routes/monsters.route.js";
import { connectDB } from "./database/database.js";

const app = express();
const port = 8000;

connectDB();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use("/monsters",monsters);

app.listen(port, function(){
    console.log(`App listening on port ${port}`);
});