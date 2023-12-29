require("dotenv").config();
const express = require('express');
const router = require('./router/auth.router');
const app = express();
const connectdb = require("./utils/db");


app.use(express.json());

app.use("/api/auth", router);



const PORT = 8000;
connectdb().then (() => {

    app.listen(8000, () =>{
        console.log("my name is khan ");
    });
});