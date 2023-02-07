module.exports=(Sequelize,sequelize)=>{
    const role=sequelize.define("role",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
       name:{
            type:Sequelize.STRING,
            unique:true,
            allowNull:true
        }
    })
    return role
}