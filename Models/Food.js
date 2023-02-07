module.exports=(Sequelize,sequelize)=>{
    const food=sequelize.define("food",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
       
        cost:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        isveg:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        },
        description:{
            type:Sequelize.STRING
        }
    },{
        tableName:"Foods"
    })
    return food
}