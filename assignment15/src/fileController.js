import fs from "fs";

export const home = (req, res) => {
  return res.render("home");
};

export const postFile = (req, res) => {
  const {
    file: { path },
  } = req;
  const data = fs.readFileSync(path, "utf8");
  res.render("read", { data });
};
