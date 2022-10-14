const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "tester",
    password: "123456",
    database: "mydb"
})

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = "SELECT name, address FROM customers";


    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log( fields);

    });
});



// {
//     fieldCount: 0,
//     affectedRows: 14,
//     insertId: 0,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '\'Records:14  Duplicated: 0  Warnings: 0',
//     protocol41: true,
//     changedRows: 0
//   }