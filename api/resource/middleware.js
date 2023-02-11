const db = require("../../data/dbConfig");
exports.checkResourceName = (req,res,next) =>{
    const {resource_name} = req.body
    if(!resource_name) {
        next({
            status:400,
            message: "Kaynak İsmi Yok"
        })
    }
    next();
}
exports.checkUniqeResourceName = async (req, res, next) => {
    try{
        const {resource_name} = req.body;
        const possible = await db("resources").where("resource_name", resource_name).first();
        if(possible){
            next({ 
                status: 400, 
                message: "Kaynakİsim başka seç"
            });
        }
        next();
    }
    catch(err){
        next(err)
    }
}