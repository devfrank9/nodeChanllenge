import express from "express";

const PORT = 4001;
const app = express();

const home = (req, res) => res.send("This is home");
const about = (req, res) => res.send("This is about");
const contact = (req, res) => res.send("This is contact");
const login = (req, res) => res.send("This is login");

app.get("/", home);
app.get("/about", about);
app.get("/contact", contact);
app.get("/login", login);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
