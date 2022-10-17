const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "tester",
    password: "123456",
    database: "aadb"
})



con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    const content1 = `<span>Web application build with React JS and prosesses data from simple API.</span> 
    <span>The Trivia API Database https://opentdb.com/api_config.php </span> 
    <span>Fetc"h, async, useEffect, States and a few callback hells</span> 
    <img src="../screens/quizzical.PNG" alt="Quizzical" />`;
    const tags1 = JSON.stringify(['javascript', 'React', 'API', 'CSS', 'web']);

    const content2 = `<span>That’s the project for game jam called One Button. Made in two evenings in Unity engine.</span>
    <img src="../screens/one-button.PNG" alt="One Button" />`;
    const tags2 = JSON.stringify(['Csharp', 'Unity', 'GameDev']);

    const sql = "INSERT INTO posts (section, title, innertext, tags) VALUES ?";

    const values = [
        ['Web', 'Trivia API prototype', content1, tags1],
        ['GameDev', 'Game for the weekend game jam', content2, tags2]
        // ['Web', 'Trivia API prototype', content1],
        // ['GameDev', 'Game for the weekend game jam', content2]

    ];

    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
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