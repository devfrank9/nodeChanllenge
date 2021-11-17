import express from "express";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import storyRouter from "./routers/storyRouter";

const app = express();

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

export default app;
