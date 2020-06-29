const express = require("express");
const path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const dotenv = require('dotenv');
let port = process.env.PORT;
dotenv.config({path:'./.env'});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = mysql.createPool({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});

//Connect DB
db.getConnection((err) => {
  if(err) throw err;
  console.log('MySql Connected');
})

app.use(express.static(path.join(__dirname, './client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

app.post('/contact', (req, res) => {
  console.log(req.body.data)
  res.status(200).send('Your Message Has Been Sent!')
})



if (port == null || port == "") {
  port = 9000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
});