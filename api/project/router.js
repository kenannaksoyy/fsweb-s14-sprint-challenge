//  `/api/projects` router buraya
const express = require("express");
const { checkProjectName } = require("./middleware.js");
const projectModel = require("./model.js");
const router = express.Router();

router.get("/", async(req, res, next) => {
    try{
        const projects = await projectModel.getAllProjects();
        res.status(200).json(projects);
    }
    catch(err){
        next(err);
    }
});

router.post("/",checkProjectName, async(req, res, next) =>{
    try{
        const cProject = await projectModel.createProject(req.body);
        res.status(200).json(cProject);
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