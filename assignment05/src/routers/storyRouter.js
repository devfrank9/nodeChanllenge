import express from "express";
import { id, edit, deleteE } from "../controllers/storyController";

const storyRouter = express.Router();
storyRouter.get("/:id", id);
storyRouter.get("/:id/edit", edit);
storyRouter.get("/:id/delete", deleteE);

export default storyRouter;
