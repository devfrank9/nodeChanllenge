export const join = (req, res) => res.render("join", { pageTitle: "JOIN" });
export const login = (req, res) => res.render("login", { pageTitle: "LOGIN" });
export const seeUsers = (req, res) =>
  res.render("users", { pageTitle: "USER" });
export const seeUser = (req, res) => res.render("user", { pageTitle: "USER" });
export const editProfile = (req, res) =>
  res.render("edit-profile", { pageTitle: "Edit Profile" });
