const cc=require("../Controller/Categorycontroller")
const mw=require("../Middleware/authmiddleware")

module.exports=(app)=>{
    app.post("/foodapp/v1/createcategory",mw.authvalidator,cc.createcategory)
    app.get("/foodapp/v1/getallcategory",cc.getallcategories)
    app.get("/foodapp/v1/getcategory/:name",cc.getonecategory)
    app.put("/foodapp/v1/updatecategory/:id",mw.authvalidator,cc.updatecateg)
    app.delete("/foodapp/v1/deletecategory/:id",mw.authvalidator,cc.deletecateg)
    app.delete("/foodapp/v1/deletecategory",mw.authvalidator,cc.deleteallcateg)
}