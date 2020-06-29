const express = require("express");
const path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const dotenv = require('dotenv');
let port = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({path:'./.env'});

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


const removeQuotes = str => {
  let itemToReplace = /"/gi;
  let noQuotesStr = str.replace(itemToReplace, '|');
  return noQuotesStr;
}
app.post('/contact', (req, res) => {
  try{
  const data = req.body.data;
  data.name = removeQuotes(data.name);
  data.email = removeQuotes(data.email);
  data.message = removeQuotes(data.message);
  const query = `INSERT into contact VALUES(DEFAULT, DEFAULT, "${data.name}", "${data.email}", "${data.message}")`;
  db.query(query, (err, result) => {
    if(err) throw err;
    console.log(result)
    res.status(200).send('Your Message Has Been Sent!')

  })
} catch(err){
  console.log(err); 
  res.status(4044).send(err);
}

})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

if (port == null || port == "") {
  port = 9000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
});