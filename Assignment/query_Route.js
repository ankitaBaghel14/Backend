const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" }
];

app.get("/users", (req, res) => {
  const name = req.query.name;

  if (!name) return res.json(users);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filtered);
});

app.listen(3000,()=>{
    console.log("Server started successfully..");
});