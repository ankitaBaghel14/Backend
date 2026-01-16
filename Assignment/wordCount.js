const fs = require("fs");

fs.readFile("input.txt", "utf8", (e, d) => {
  if (e) return;

  let c = d.trim().split(/\s+/).length;

  fs.writeFile("output.txt", c.toString(), () => {});
});
