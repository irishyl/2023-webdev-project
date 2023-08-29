import express from "express";

// for getting the whole html file from server
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import bodyParser from "body-parser";

const app = express();
const port = 3000;
var bandName = ""

// Middleware - parsing the html
app.use(bodyParser.urlencoded({extended: true}));

// get band name using body parser
function bandNameGenerator (req, res, next){
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
};

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});