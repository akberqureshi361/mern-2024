const express = require("express");
const router = express.Router();

router.get("/",(req, res ) =>{
res.send("welcome to world best mern series by ahad using router");
});
router.route("/ahad").get((req, res ) =>{
res.send("welcome to world best mern series by ahad using router");
});

module.exports= router;
