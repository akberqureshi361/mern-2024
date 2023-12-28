const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
});

const PORT = 8000;

app.listen(8000, () =>{
    console.log("my name is khan ");
})