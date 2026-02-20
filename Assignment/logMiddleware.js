const express = require("express");
const app = express();

app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const time = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${time}ms`);
  });

  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000,()=>{
    console.log("Server started successfully..");
});
