const db = require("../../data/dbConfig");
exports.checkTaskDes = (req,res,next) =>{
    const {task_description} = req.body
    if(!task_description) {
        next({
            status:400,
            message: "task_description Yok"
        })
    }
    next();
}
exports.checkProjectId = (req,res,next) => {
    const {project_id} = req.body
    if(!project_id) {
        next({
            status:400,
            message: "project_id Yok"
        })
    }
    next();
}

exports.checkCurrentProject = async(req,res,next) => {
    const {project_id} = req.body;
    const possible = await db("projects").where("project_id", project_id).first();
    if(!possible){
        next({
            status:400,
            message: `${project_id} idli proje nein`
        })
    }
    else{
        next();
    }
}
