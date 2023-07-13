const getAllTasks = (req, res) => {
    res.send("obtained all tasks.");
};

const createTask = (req, res) => {
    res.send("create a new task.");
};

const getSingleTask = (req, res) => {
    res.send("obtained a task.");
};

const updateTask = (req, res) => {
    res.send("updated a task.");
};

const deleteTask = (req, res) => {
    res.send("deleted a task.");
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}
