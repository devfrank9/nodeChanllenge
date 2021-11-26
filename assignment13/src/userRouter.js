import express from "express";
import { publicOnlyMiddleWare, protectorMiddleware } from "./middlewares.js";
import {
  profile,
  getLogin,
  postLogin,
  getJoin,
  postJoin,
} from "./userController.js";

const userRouter = express.Router();

// Add your magic here!
userRouter.get("/", protectorMiddleware, profile);
userRouter
  .route("/login")
  .all(publicOnlyMiddleWare)
  .get(getLogin)
  .post(postLogin);
userRouter.route("/join").all(publicOnlyMiddleWare).get(getJoin).post(postJoin);

export default userRouter;
