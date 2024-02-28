import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs'

inquirer
  .prompt({
    "message": "Please enter your URL",
    "name": "URL"
  })
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('myImage.png'));
    fs.writeFile("url.txt", url, ((err)=>{
        if(err)
        {
            console.log(err);
        }
        console.log("File was successfully uploaded");

    }))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });