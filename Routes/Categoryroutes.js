const cc=require("../Controller/Categorycontroller")
const mw=require("../Middleware/authmiddleware")

module.exports=(app)=>{
    app.post("/foodapp/v1/createcategoty",mw.authvalidator,cc.createcategory)
}