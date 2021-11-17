import express from "express";
import { id, editProfile } from "../controllers/userController";

const userRouter = express.Router();
userRouter.get("/:id", id);
userRouter.get("/edit-profile", editProfile);

export default userRouter;
