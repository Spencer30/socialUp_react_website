const express = require("express");
const path = require('path');
const bodyParser = require('body-parser')
let port = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

app.post('/contact', (req, res) => {
  
  res.status(200).send('Your Message Has Been Sent!')
})


if (port == null || port == "") {
  port = 9000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
});