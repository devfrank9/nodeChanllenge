import express from "express";
import path from "path";
import bodyParser from "body-parser";
import fileRouter from "./fileRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", fileRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
