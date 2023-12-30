const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const Connecteddb = async () => {
    try {
        mongoose.connect(URI);
        console.log("connected succes mera kdfjkd ");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
};
module.exports = Connecteddb;