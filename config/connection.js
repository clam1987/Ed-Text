// Require modules
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config()
 

 

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.USER,
    password: process.env.PW,
    database: "textgame_db"
});

db.connect((err) => {
    if (err) throw err;

    console.log(`connected as id: ${db.threadId}`)
});

module.exports = db;

