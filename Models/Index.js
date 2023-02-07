const config=require("../Config/dbconfig")
const Sequelize=require("sequelize")
const sequelize=new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host:config.HOST,
        dialect:config.dialect,
        operatorAliases:false,
        pool:{
            max:config.pool.max,
            min:config.pool.min,
            acquire:config.pool.acquire,
            idle:config.pool.idle
        }
    });
    const db={}
    db.sequelize=sequelize
    db.Sequelize=Sequelize
    const role=require("./Role")(Sequelize,sequelize)
    const user=require("./User")(Sequelize,sequelize)
    const restaurant=require("./Restaurant")(Sequelize,sequelize)
    const category=require("./Category")(Sequelize,sequelize)
    const food=require("./Food")(Sequelize,sequelize)
    const cart=require("./Cart")(Sequelize,sequelize)
    

    db.role=role
    db.user=user
    db.restaurant=restaurant
    db.category=category
    db.food=food
    db.cart=cart

    db.role.belongsToMany(db.user,{through:"userroles"})
    db.user.belongsToMany(db.role,{through:"userroles"})


    db.user.hasOne(db.cart)
    db.cart.belongsTo(db.user)

    db.restaurant.belongsToMany(db.category,{through:"restaurantcategory"})
    db.category.belongsToMany(db.restaurant,{through:"restaurantcategory"})

    db.food.belongsToMany(db.restaurant,{through:"restaurantfood"})
    db.restaurant.belongsToMany(db.food,{through:"restaurantfood"})

    db.category.hasMany(db.food)
    db.food.belongsTo(db.category)

    db.cart.belongsToMany(db.food,{through:"foodcarts"})
    db.food.belongsToMany(db.cart,{through:"foodcarts"})

    module.exports=db