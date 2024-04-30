const mysql = require("mysql");

const db  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tutorial"
});

db.connect(err =>{
    if(err) {
        console.error("Error connecting to Mysql database:", err);
    } else {
        console.log("connected to Mysql database");
    }
});

module.exports = db;