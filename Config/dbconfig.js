module.exports={
    HOST : "localhost",
    USER : "root",
    PASSWORD : "9994106907Ravi",
    DB : "FOODAPP",
    dialect : "mysql",
    pool :{
    max :5,
    min :0,
    acquire: 30000, //max time in ms that a pool will try to getconnection before throwing error
    idle :10000 // maximum time in ms that a connection can be idlebefore being released
        }
}