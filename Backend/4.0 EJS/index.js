import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;
const date = new Date(); 
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var today = `${year}-${month}-${day}`;

app.get("/", (req, res) => {
    if(today.getDay == 0 || today.getDay == 6){
        res.send(`<h1>Hey! It's the weekend, it's time to have fun!</h1>`)
    }
    else{
        res.send(`<h1>Hey! It's a weekday, it's time to work hard!</h1>`)
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});