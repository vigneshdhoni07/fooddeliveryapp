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
exports.getallcategories=async(req,res)=>{
    try{
    let allcateg=await category.findAll()
    res.status(200).json(allcateg)
    
}
catch(err)
{
    res.status(400).json(err||{message:"something went wrong"})
}
    
}

exports.getonecategory=async(req,res)=>{
    try {
        var name=req.params.name
        var categ=await category.findOne({where:{name:name}})
        res.status(200).json(categ)
        
    } catch (error) {
        res.status(400).json(err||{message:"something went wrong"})
    }
}
exports.updatecateg=async(req,res)=>{
    try {
        if(!req.isAdmin && !req.isVerified)
        {
            res.status(400).json({message:"Unauthorised Access"})
        }

            var id=req.params.id
            
            var {name}=req.body
            var updatedcateg={
                name:name
            }

           var updatedcategory= await category.update(updatedcateg,{where:{id:id}})
           res.status(200).json(updatedcategory)

        }
    
    catch (error) {
        res.status(400).json(err||{message:"something went wrong"})
    }
}

exports.deletecateg=async(req,res)=>{
    try{
        if(!req.isAdmin && !req.isVerified)
        {
            res.status(400).json({message:"Unauthorised Access"})
        }
        var id=req.params.id

        await category.destroy({where:{id:id}})
        res.status(200).json({message:"deletion success"})
    }
    catch(err)
    {
        res.status(400).json(err||{message:"something went wrong"})
    }
}
exports.deleteallcateg=async(req,res)=>{
    try{
        if(!req.isAdmin && !req.isVerified)
        {
            res.status(400).json({message:"Unauthorised Access"})
        }

        await category.truncate()
        res.status(200).json({message:"deletion success"})
}
catch(err)
{
    res.status(400).json(err||{message:"something went wrong"})
}
}