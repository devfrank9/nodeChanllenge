/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!

export const home = async (req, res) => {
  const movies = await Movie.find({});
  return res.render("home", { pageTitle: "Home", movies });
};

export const getUpload = async (req, res) => {
  return res.render("upload", { pageTitle: "Upload Movie" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, summary, year, rating, genres },
  } = req;
  console.log(req.body);
  try {
    await Movie.create({
      title,
      summary,
      year,
      rating,
      genres: genres.split(",").map((genre) => genre.trim()),
    });
    console.log(Movie, "movie");
    return res.redirect("/");
  } catch (error) {
    return res.statue(400).render("upload", { pageTitle: "Upload Movie" });
  }
};

export const watchMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  console.log(movie);
  return res.render("watch", { pageTitle: movie.title, movie });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(400).render("404", { pageTitle: "Movie Not Found" });
  }
  return res.render("edit", { pageTitle: `Edit ${movie.title}`, movie });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const {
    body: { title, summary, year, rating, genres },
  } = req;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(400).render("404", { pageTitle: "Movie not Found" });
  }
  await Movie.findByIdAndUpdate(id, {
    title,
    summary,
    year,
    rating,
    genres: genres.split(",").map((genre) => genre.trim()),
  });
  return res.redirect(`/movies/${id}`);
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(400).render("404", { pageTitle: "Movie not Found" });
  }
  await Movie.findByIdAndDelete(id);
  return res.redirect("/");
};

export const searchMovie = async (req, res) => {
  const { keyword } = req.query;
  let movies = [];
  try {
    if (keyword) {
      movies = await Movie.find({
        title: {
          $regex: new RegExp(keyword, "i"),
        },
      });
    }
    return res.render("search", { pageTitle: "Search", movies });
  } catch (error) {
    return res.status(400).render("404", { pageTitle: "Movie not Found" });
  }
};
