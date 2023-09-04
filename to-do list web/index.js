import express  from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let newItems = [];

//middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
    let date = new Date();
    let options = {weekday:"long", year:"numeric", month:"long", day:"numeric"};
    let day = date.toLocaleDateString("en-US", options);
    res.render("index.ejs", {today: day, newListItems: newItems});
  });

/* 1-add new task */
app.post("/", (req,res) => {
    let newItemText = req.body.newItem; // Get the text of the new item from the request
    let newItem = { task: newItemText, checked: false }; // Create a new task object with default checked: false
    newItems.push(newItem); // Push the new task object into the newItems array
    res.redirect("/");
});

/* 2 check and uncheck an item */

// Handle POST request for checking/unchecking a task
app.post("/check", (req, res) => {
    const taskIndex = req.body.taskIndex;
    if (taskIndex >= 0 && taskIndex < newItems.length) {
        newItems[taskIndex].checked = !newItems[taskIndex].checked;
    }
    res.redirect("/");
});

/* 3 delete an item */
app.post("/delete", (req, res) => {
    const taskIndex = req.body.taskIndex;
    // Use the taskIndex to remove the task from the newItems array
    if (taskIndex >= 0 && taskIndex < newItems.length) {
        newItems.splice(taskIndex, 1);
    }
    res.redirect("/");
});

// server config
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});