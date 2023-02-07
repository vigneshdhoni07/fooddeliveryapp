module.exports=(Sequelize,sequelize)=>{
    const category=sequelize.define("category",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
          },
          name:{
            type:Sequelize.STRING,
            allowNull:false
          }
    },{
        tableName:"categories"
    })
    return category
}