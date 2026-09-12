// bring express in node.js
const express = require("express");

// installing cors middleware
const cors = require("cors");

// create an express app
const app = express();


app.get("/", (req, res) => {
    res.send("Back-end server is running");
});

app.use(cors());// use cors middleware to handle requests from different origins

const tasks =[
        {
              id:1,
              title:"Learn React",
              description:"Understanding Components",
              status: "Completed"
        },
        {
              id:2,
              title:"Learn JavaScript",
              description:"Understanding Variables, Functions",
              status: "Pending"
        }
    ];


app.get("/api/tasks", (req, res) => {
    res.json(tasks);
    });

//our api route (testing)
app.listen(5050, () => {
    console.log("Server is running on port 5050");
});