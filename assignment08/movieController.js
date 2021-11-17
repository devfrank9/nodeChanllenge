import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  const videos = getMovies();
  return res.render("home", { pageTitle: "Videos!", videos });
};
export const movieDetail = (req, res) => {
  const { id } = req.params;
  const video = getMovieById(id);
  console.log(video);
  return res.render("detail", { video });
};
export const filterMovie = (req, res) => {
  let videos = getMovies();
  const { year, rating } = req.query;
  if (year) {
    videos = getMovieByMinimumYear(year);
    return res.render("search", {
      message: `Searching by year: ${year}`,
      videos,
    });
  }
  if (rating) {
    videos = getMovieByMinimumRating(rating);
    return res.render("search", {
      message: `Searching by rate: ${rating}`,
      videos,
    });
  }
};
