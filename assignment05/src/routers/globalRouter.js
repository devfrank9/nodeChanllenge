import express from "express";
import {
  home,
  trending,
  neww,
  join,
  login,
  users,
} from "../controllers/userController";
import { stories } from "../controllers/storyController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", neww);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/users", users);
globalRouter.get("/stories", stories);

export default globalRouter;
