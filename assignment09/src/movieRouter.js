import express from "express";
import { home, movieDetail, getUpload, postUpload } from "./movieController";

const movieRouter = express.Router();

movieRouter.route("/").get(home);
movieRouter.route("/add").get(getUpload).post(postUpload);
movieRouter.route("/:id").get(movieDetail);
// create the '/' route
// create the /:id route
// create the /add route (GET + POST)

export default movieRouter;
