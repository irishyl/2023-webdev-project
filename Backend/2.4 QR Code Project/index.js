import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"; // fs = file system, 原生的

inquirer
  .prompt([
    {
    message: "Type in your URL: ", 
    name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', url, err => {
      if (err) {
        console.error(err);
      }
      console.log('The file has been saved successfully!')
      // file written successfully
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });