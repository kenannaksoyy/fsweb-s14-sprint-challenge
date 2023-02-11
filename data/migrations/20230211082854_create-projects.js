/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", t => {
        t.increments("project_id");
        t.string("project_name",64).notNullable();
        t.string("project_description",128);
        t.integer("project_completed").defaultTo(0);
    })
    .createTable("resources", t =>{
        t.increments("resource_id");
        t.string("resource_name",64).notNullable().unique();
        t.string("resource_description",128);
    })
    .createTable("tasks", t =>{
        t.increments("task_id");
        t.string("task_description",128).notNullable();
        t.string("task_notes", 256);
        t.integer("task_completed").defaultTo(0);

        t.integer("project_id").notNullable().unsigned()
        .references("project_id").inTable("projects")
        .onUpdate("CASCADE").onDelete("CASCADE");
    })
    //project_resources normalisazyon
    .createTable("project_resources", t =>{
        t.increments("project_resources_id");

        t.integer("project_id").notNullable().unsigned()
        .references("project_id").inTable("projects")
        .onUpdate("CASCADE").onDelete("CASCADE");

        t.integer("resource_id").notNullable().unsigned()
        .references("resource_id").inTable("resources")
        .onUpdate("CASCADE").onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
