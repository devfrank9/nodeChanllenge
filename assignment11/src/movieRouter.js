import express from "express";
import {
  home,
  getUpload,
  searchMovie,
  postUpload,
  watchMovie,
  getEdit,
  postEdit,
  deleteMovie,
} from "./movieController.js";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.route("/upload").get(getUpload).post(postUpload);
movieRouter.route("/movies/:id").get(watchMovie);
movieRouter.route("/movies/:id/edit").get(getEdit).post(postEdit);
movieRouter.route("/movies/:id/delete").get(deleteMovie);
movieRouter.get("/search", searchMovie);

export default movieRouter;
