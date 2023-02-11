exports.checkProjectName = (req,res,next) =>{
    const {project_name} = req.body
    if(!project_name) {
        next({
            status:400,
            message: "Proje İsmi Yok"
        })
    }
    next()
}