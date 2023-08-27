const fs = require("fs");

// fs.writeFile("message.txt","Hello from Node.js", err => {
//     if (err) {
//       console.error("err");
//     }
//     console.log("success!");
//   });

  fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
