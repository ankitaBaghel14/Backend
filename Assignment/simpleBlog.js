const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let posts = [];

// List posts
app.get("/posts", (req, res) => {
  res.render("posts", { posts });
});

// View single post
app.get("/posts/:id", (req, res) => {
  const post = posts[req.params.id];
  res.render("post", { post });
});

// Form page
app.get("/new", (req, res) => {
  res.render("new");
});

// Create post
app.post("/posts", (req, res) => {
  posts.push(req.body);
  res.redirect("/posts");
});

app.listen(3000,()=>{
    console.log("Server started successfully..");
});
