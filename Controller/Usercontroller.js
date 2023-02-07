const {user,role,Sequelize}=require("../Models/Index")
const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken")
const mailer=require("../mailver")
exports.createuser=async(req,res)=>{
try{
let{username,password,email,phoneno,roles}=req.body

var newuserdata={
    username:username,
    password:bcrypt.hashSync(password,5),
    email:email,
    phoneno:phoneno
}
var newuser=await user.create(newuserdata)
var userroles=await role.findAll({where:{
    name:{
        [Sequelize.Op.or]:roles
    }
}})
var token=jwt.sign({id:newuser.id},process.env.SECRET_KEY,{expiresIn:"30min"})
var obj={
    email:newuser.email,
    subject:"welcome tofoodapp",
    text:`your token is :${token}`
}
mailer(obj)
await newuser.setRoles(userroles)
//console.log(await newuser.getroles())
res.status(200).json(newuser)

}
catch(err)
{
res.status(400).json(err||"something went wrong")
}
}

exports.verifyuser=async(req,res)=>{
try{
    var id=req.uid
    var updateduser=await user.update({isVerified:true},{where:{id:id}})
    res.status(200).send(updateduser)
}
   catch(err)
   {
    res.send(err)
   }

}
exports.userlogin=async(req,res)=>{
    let{username,password}=req.body
    let userdetails={
        username:username,
        password:password
    }
    try {
        var userdet=await user.findOne({where:{username:username}})
        var veri;
        veri=userdet.isVerified
        if(!veri)
        {
            res.status(400).json({message:"user not verified"})
        }
       var valid=await bcrypt.compare(password,userdet.password)
       if(!valid)
       {
        res.status(400).json({message:"invalid credentials"})
       }
       if(valid)
       {
        var token=jwt.sign({id:userdet.id},process.env.SECRET_KEY,{expiresIn:"1day"})
        res.status(200).json({tokenis:token})
       }

    } catch (error) {
        res.status(400).json({message:"Something Went Wrong"})
    }
}