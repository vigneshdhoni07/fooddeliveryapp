module.exports=(Sequelize,sequelize)=>{
    const cart=sequelize.define("cart",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        cost:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    },{
        tableName:"carts"
    })
    return cart
}