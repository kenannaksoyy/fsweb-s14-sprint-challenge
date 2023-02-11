// `Resource` modeli buraya
const db = require("../../data/dbConfig");

const getAllResources = async() => {
    const resources = await db("resources");
    return resources;
}

const createResource = async (cBody) => {
    const [resource_id] = await db("resources").insert(cBody);
    const createdResource = await db("resources").where("resource_id", resource_id).first();
    return createdResource;
}

module.exports={getAllResources, createResource};