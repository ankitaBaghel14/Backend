const fs = require("fs");

const folder1 = "./folder1";
const folder2 = "./folder2";

fs.readdir(folder1, function (err, files1) {
    if (err) {
        console.log("error reading folder1");
        return;
    }

    fs.readdir(folder2, function (err, files2) {
        if (err) {
            console.log("error reading folder2");
            return;
        }

        for (let i = 0; i < files1.length; i++) {
            let file = files1[i];

            if (!files2.includes(file)) {
                fs.copyFile(
                    folder1 + "/" + file,
                    folder2 + "/" + file,
                    function (err) {
                        if (err) {
                            console.log("error copying", file);
                        } else {
                            console.log("copied", file);
                        }
                    }
                );
            } else {
                console.log("already exists", file);
            }
        }
    });
});
