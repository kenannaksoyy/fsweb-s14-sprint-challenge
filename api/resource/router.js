// `/api/resources` router buraya
const express = require("express");
const {checkResourceName,checkUniqeResourceName } = require("./middleware.js");
const resourcesModel = require("./model.js");
const router = express.Router();

router.get("/", async(req, res, next) => {
    try{
        const resources = await resourcesModel.getAllResources();
        res.status(200).json(resources);
    }
    catch(err){
        next(err);
    }
});

router.post("/",checkResourceName,checkUniqeResourceName, async(req, res, next)=> {
    try{
        const creSource = await resourcesModel.createResource(req.body);
        res.status(200).json(creSource);
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