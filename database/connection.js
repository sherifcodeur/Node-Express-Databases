

const mysql = require('mysql2')

const dbConnection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'admin',
    database:'problem'

})


dbConnection.connect(function(err) {
    
    if (err) throw err;
    
    console.log("Database Connected!");

}
    
    
    );







module.exports = dbConnection;