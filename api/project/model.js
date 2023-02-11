// `Proje` modeli buraya
const db = require("../../data/dbConfig");

const getAllProjects = async () => {
    const projects = (await db("projects")).map( p => {
        return{
            ...p,
            project_completed: p.project_completed===0 ? false : true
        }
    });
    return projects;
}

const createProject = async (cBody) => {
    const [project_id] = await db("projects").insert(cBody);
    const createdProject = await db("projects").where("project_id", project_id).first();
    return {
        ...createdProject,
        project_completed: createdProject.project_completed===0 ? false : true
    }
}

module.exports={getAllProjects,createProject};