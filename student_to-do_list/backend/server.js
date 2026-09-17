require("dotenv").config();

// bring express in node.js
const express = require("express");

// installing cors middleware
const cors = require("cors");

// set DNS server to Google's public DNS
const dns = require("dns");
dns.setServers(["8.8.8.8"]);   

// create an express app
const app = express();

// import the Task model
const Task = require("./models/Task");

app.get("/", (req, res) => {
    res.send("Back-end server is running");
});

//mongoose connection
const mongoose = require("mongoose");

app.use(cors()); // use cors middleware to handle requests from different origins
  
app.use(express.json());// use express.json() middleware to parse incoming JSON requests

//mongoose connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});


//read tasks in backend
 app.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error("Error reading tasks:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/api/tasks/:id", async (req, res) => {
    try {
        
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(task);
    } catch (error) {
        console.error("Error reading task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// create operation in backend
app.post("/api/tasks", async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// update operation in backend
app.put("/api/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(task);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// delete operation in backend
app.delete("/api/tasks/:id",async (req, res) => {
    try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if(!deletedTask){
            return res.status(404).json({error:"Task not found"});
        }
        res.json(deletedTask);
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})
//our api route (testing)
app.listen(5050, () => {
    console.log("Server is running on port 5050");
});