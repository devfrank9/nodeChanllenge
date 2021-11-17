import express from "express";

const app = express();
const date = new Date();

const urlLogger = (req, res, next) => {
  console.log(`PORT: ${req.url}`);
  next();
};
const timeLogger = (req, res, next) => {
  console.log(
    `Time: ${String(date.getFullYear())}.${String(date.getMonth())}.${String(
      date.getDate()
    )}`
  );
  next();
};
const secureLogger = (req, res, next) => {
  if ("https:" === req.protocol) {
    console.log("secure ✅");
    next();
  } else {
    console.log("Insecure ❌");
    next();
  }
};
const protectLogger = (req, res) => res.end();

const home = (req, res) => res.send("<h1>Home</h1>");
const protect = (req, res) => res.send("<h1>Protected</h1>");

app.get("/", urlLogger, timeLogger, secureLogger, home);
app.get("/protected", protectLogger, protect);

// Codesandbox gives us a PORT :)
const handleListening = () => console.log(`Listening!✅`);
app.listen(process.env.PORT, handleListening);
