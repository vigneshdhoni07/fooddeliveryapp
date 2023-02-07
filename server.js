const exp=require("express")
const app=exp()

app.use(exp.json())
const db=require("./Models/Index")
db.sequelize.sync({force:false}).then(()=>{console.log("db synced");roledef()}).catch((err)=>console.log(err))
require("dotenv").config()
const roles=db.role
async function roledef()
{
try{
    var user=await roles.findAll({where:{name:"user"}})
    var admin=await roles.findAll({where:{name:"admin"}})
   // console.log(user)
    if(!user.length)
    {
        await roles.create({name:"user"})
    }
    if(!admin.length)
    {
        await roles.create({name:"admin"})
    }
}
catch(err)
{
    console.log(err)
}

}
require("./Routes/Userroutes")(app)
require("./Routes/Categoryroutes")(app)
app.listen(process.env.PORT,()=>{
    console.log("app running at 9001")
})