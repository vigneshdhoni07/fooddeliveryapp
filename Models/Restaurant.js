module.exports=(Sequelize,sequelize)=>{
    const restaurant=sequelize.define("restaurant",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        address:{
            type:Sequelize.STRING
        },
        contact:{
            type:Sequelize.INTEGER
        },
        ispureveg:{
            type:Sequelize.BOOLEAN,
            allowNull:false

        }
    },{
        tableName:"restaurants"
    })
    return restaurant
}