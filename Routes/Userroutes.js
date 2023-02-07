const uc=require("../Controller/Usercontroller")
const mw=require("../Middleware/authmiddleware")
module.exports=(app)=>{
    app.post("/foodapp/v1/createuser",uc.createuser)
    app.put("/foodapp/v1/verifyuser",mw.authvalidator,uc.verifyuser)
    app.get("/foodapp/v1/signinuser",uc.userlogin)
}