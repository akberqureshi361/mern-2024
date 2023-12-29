const express = require('express');
const router = require('./router/auth.router');
const app = express();

app.use(express.json());

app.use("/api/auth", router);



const PORT = 8000;

app.listen(8000, () =>{
    console.log("my name is khan ");
})