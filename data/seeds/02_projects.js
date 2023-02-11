/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const defaultProject = [
  {
      project_name : "Pizza Siparis",
      project_description : "React ile pizza sipariş projesi",
      project_completed: 0
  },
  {
      project_name : "Bored ve Dogs",
      project_description : "React ve Redux ile boş projesi",
      project_completed: 0
  }
];
const defaultResources = [
  {
      resource_name: "StackorFlow",
      resource_description: "http://StackorFlow.com"
  },
  {
      resource_name: "GeeksforGeek",
      resource_description: "http://GeeksforGeek.com"
  }
];
const defaultTasks = [
  {
      task_description: "Arayüz Tasarlar",
      task_notes: "Arayüz tasarım kalıplarını bak",
      task_completed: 1,
      project_id: 1
  },
  {
      task_description: "Form Tasarla",
      task_notes: "React ile form orneklerine kontrol et",
      task_completed: 0,
      project_id: 1
  },
  {
      task_description: "Redux",
      task_notes: "Redux toolkit bak",
      task_completed: 0,
      project_id: 2,
  }
]
const defaultProjectResources = [
  {
      project_id: 1,
      resource_id: 1
  },
  {
      project_id: 1,
      resource_id: 2
  },
  {
      project_id: 2,
      resource_id: 1
  }
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").insert(defaultProject)
    .then( () => {
      return knex("resources").insert(defaultResources)
    })
    .then( () => {
      return knex("tasks").insert(defaultTasks)
    })
    .then( () => {
      return knex("project_resources").insert(defaultProjectResources)
    })
};
