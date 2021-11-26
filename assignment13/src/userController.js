/*
You DONT have to import the User with your username.
Because it's a default export we can nickname it whatever we want.
So import User from "./models"; will work!
You can do User.find() or whatever you need like normal!
*/
import User from "./models/User";
import bcrypt from "bcrypt";

// Add your magic here!
export const profile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.render("home", { pageTitle: "Home", user });
};
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { username, name, password, password2 } = req.body;
  console.log(req.body);
  const pageTitle = "Join";
  if (password !== password2) {
    return res
      .status(400)
      .render("join", { pageTitle, errorMessage: "Incorrect each password" });
  }
  const exists = await User.findOne({ username });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username is exist taken.",
    });
  }
  try {
    await User.create({
      username,
      name,
      password,
      password2,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", { pageTitle });
  }
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Log In" });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Log In";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exists.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res
      .status(400)
      .render("login", { pageTitle, errorMessage: "Wrong password" });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
