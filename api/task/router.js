// `/api/tasks` router buraya
const express = require("express");
const { checkProjectId, checkTaskDes, checkCurrentProject } = require("./middleware.js");

const tasksModel = require("./model.js");
const router = express.Router();

router.get("/", async(req, res, next) => {
    try{
        const tasks = await tasksModel.getAllTasks();
        res.status(200).json(tasks);
    }
    catch(err){
        next(err);
    }
});

router.post("/",checkProjectId,checkTaskDes,checkCurrentProject,async(req, res, next)=> {
    try{
        const creTask = await tasksModel.createTask(req.body);
        res.status(200).json(creTask);
    }
    catch(err){
        next(err);
    }
})

router.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      customMesaj: "Malesef olmadı",
      mesaj: err.message
    });
});

module.exports = router;