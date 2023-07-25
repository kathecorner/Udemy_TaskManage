const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
const PORT = 8080;

//routing
app.use("/api/v1/tasks", taskRoute);

//connecting to the database
const start = async () => {
    try {
        await connectDB(
            "mongodb+srv://bayerleverkusen676:wander5150@cluster0.pcipdmo.mongodb.net/todoapp?retryWrites=true&w=majority"
            );
            app.listen(PORT, console.log("the server is running."));
    } catch (err){
        console.log(err);
    }
};

start();
