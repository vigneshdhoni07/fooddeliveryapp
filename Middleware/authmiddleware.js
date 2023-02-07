const {user}=require("../Models/Index")
const jwt=require("jsonwebtoken")

const authvalidator=async function(req,res,next)
{
    var token=req.headers["x-token"]
    if(!token)
    {
        res.send("jwtmissing")
    }
    jwt.verify(token,process.env.SECRET_KEY,async(err,decoded)=>{
        if(err)
        {
            res.send("invalid token")
        }
        var id=decoded.id
        try {
            var veruser=await user.findByPk(id)
            req.uid=veruser.id
            req.isVerified=veruser.isVerified
            var uroles= await veruser.getRoles()
            // console.log(uroles[0].name+":roles")
            var eligibleroles=[]
            uroles.forEach((e)=>{
                eligibleroles.push(e.name)
            })
            // console.log(eligibleroles)
            req.isAdmin=eligibleroles.includes("admin")
            next()
        } catch (error) {
            res.send(error)
        }
    })

}
module.exports={
authvalidator
}