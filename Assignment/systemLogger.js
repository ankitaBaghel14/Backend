const os = require("os");
const fs = require("fs");

setInterval(() => {
  let t =
    new Date() +
    "\n" +
    os.platform() +
    "\n" +
    os.totalmem() +
    "\n\n";

  fs.appendFile("system.log", t, () => {});
}, 5000);
