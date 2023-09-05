const mysql=require("mysql2")
const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    database:"node-complete",
    password:"Lakshmi@2002"
   
})
module.exports=pool.promise()