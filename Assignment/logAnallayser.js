const fs = require("fs");

let total = 0;
let error = 0;
let info = 0;
let warning = 0;

let stream = fs.createReadStream("logs.txt", "utf-8");

let text = "";

stream.on("data", function (chunk) {
    text = text + chunk;
});

stream.on("end", function () {
    let arr = text.split("\n");

    for (let i = 0; i < arr.length; i++) {
        total = total + 1;

        if (arr[i].includes("ERROR")) {
            error = error + 1;
        }

        if (arr[i].includes("INFO")) {
            info = info + 1;
        }

        if (arr[i].includes("WARNING")) {
            warning = warning + 1;
        }
    }

    console.log("total lines", total);
    console.log("error", error);
    console.log("info", info);
    console.log("warning", warning);
});

stream.on("error", function () {
    console.log("file error");
});
