import express from "express";
import multer from "multer";
import { home, postFile } from "./fileController";

const fileRouter = express.Router();
const uploadFile = multer({ dest: "uploads/" });

fileRouter.route("/").get(home).post(uploadFile.single("txt"), postFile);

export default fileRouter;
