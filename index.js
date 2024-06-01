import express from "express";
import ejs from "ejs";

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(8080, () => {
  console.log("server running on 8080");
});
