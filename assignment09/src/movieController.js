import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) => {
  return res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });
};

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "upload" });
};
export const postUpload = (req, res) => {
  let { title, synopsis, genres } = req.body;
  genres = genres.split(",");
  addMovie({ title, synopsis, genres });
  return res.redirect("/");
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
