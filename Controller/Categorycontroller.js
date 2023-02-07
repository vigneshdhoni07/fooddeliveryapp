const {category}=require("../Models/Index")

exports.createcategory=async(req,res)=>{
    let{name}=req.body

    var categ={name:name}
    try {
        if(!req.isAdmin && !req.isVerified)
        {
            res.status(400).json({message:"Unauthorised Access"})
        }
        var categcreate=await category.create(categ)
        res.status(200).json({message:"creation success"})
    } catch (error) {
        res.status(400).json(error||{message:"something went wrong"})
    }

}