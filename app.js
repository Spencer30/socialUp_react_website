const express = require("express");
let port = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, './client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});


if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
});