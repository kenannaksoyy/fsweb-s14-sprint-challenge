// bu`Task` modeli buraya
const db = require("../../data/dbConfig");
const getAllTasks = async() => {
    const tasks = (
        await db("tasks").leftJoin("projects", "tasks.project_id", "projects.project_id")
        .select(
            "tasks.task_id", "tasks.task_description", "tasks.task_notes","tasks.task_completed",
            "projects.project_name","projects.project_description")
        ).map( t => {
            return {
                ...t,
                task_completed: t.task_completed === 0 ? false : true,

            } 
        })
    return tasks;
}
const createTask = async (cbody) => {
    const [task_id] = await db("tasks").insert(cbody);
    const createdTask = await db("tasks").where("task_id", task_id).first();
  
    return {
      ...createdTask,
      task_completed: createdTask.task_completed === 0 ? false : true
    };
  };
module.exports={getAllTasks,createTask};