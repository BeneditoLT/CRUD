const express = require('express');
const app = express();
const PORT = 4001;
// get the client node
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'lucas123',
  database: 'programadorabordo'
});
connection.connect();

  connection.query('SELECT * FROM products', function (error, results) {
    
    
    app.get('/products', function(req, res)  {
        res.send(results.map(item => ({ name: item.name, price: item.price })))
      })
      
      app.listen(4001)
 

    
  });
  



