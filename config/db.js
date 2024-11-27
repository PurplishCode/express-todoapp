const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.createConnection(`${process.env.DB_MONGODB}`).on("open", ()=>{
console.log("Mongoose connected");
}).on("error",()=>{
    console.log("MongoDB connection failed..");
});

module.exports = connection;