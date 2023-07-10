const express = require("express");
const app = express();
const PORT = 8080;

app.get("/api/v1/tasks", (req, res)=> {
    res.send("obtained all tasks.");
});

app.post("/api/v1/tasks", (req, res)=> {
    res.send("create a new tasks.");
});

app.get("/api/v1/tasks/:id", (req, res)=> {
    res.send("obtained the task.");
});

app.patch("/api/v1/tasks", (req, res)=> {
    res.send("updated the task.");
});

app.delete("/api/v1/tasks/:id", (req, res)=> {
    res.send("delete the task.");
});

app.listen(PORT, console.log("the server is running."));
