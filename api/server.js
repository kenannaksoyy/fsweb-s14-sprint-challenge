// serverı buraya yazın ve index.js require yazın
const express = require("express");
const server = express();

const projectsRouter = require("./project/router.js");
const resourcesRouter = require("./resource/router.js");
const tasksRouter = require("./task/router.js");
server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", (req, res)=> {
    res.status(200).json({
        message:"Server Get Deneme"
    })
});

server.use("*", (req, res) => {
    res.status(404).json({
        message: "Opps Sayfa Bulunamadı"
    })
});

module.exports = server;