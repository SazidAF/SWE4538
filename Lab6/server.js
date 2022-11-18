require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();


const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(router);


//app.get('/', (req, res) => res.send('Hello World'));
app.listen(PORT, () => {
  console.log(`Server running on Port: localhost:${PORT}`);
});
