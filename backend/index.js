const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const Article = require("./models/Article");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome here!" });
});

// CREATE NEW ARTICLE
app.post("/api/v1/articles", async (req, res) => {
  try {
    const article = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    await article.save();
    return res.json({ article: article });
  } catch (error) {
    console.log("ERROR-CREATE::", error);
    res.json({ message: "Unable to create an article" });
  }
});

// GET ALL ARTICLES 
app.get("/api/v1/articles", async(req, res) => {
    const articles = await Article.find()
    res.send(articles)
});

mongoose
  .connect("mongodb://localhost:27017/my-brand", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected!");
  })
  .catch((e) => {
    console.log("ERROR:", e);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
