const mysql = require("mysql2");

const conn = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345678Aa",
    database: "crud"
});


conn.connect((err) => {
    if (err) throw err;
    console.log("DB connected");
});


module.exports = conn;