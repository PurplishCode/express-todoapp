require('dotenv').config('./env');

const app = require('./app');
const db = require('./config/db');
const userModel = require('./model/user_model');
app.get('/', (req,res) => {
    res.send("Hello!");
});
app.listen(process.env.DB_PORT, ()=>{
    console.log(`Application is currently listening on http://localhost:${process.env.DB_PORT}`);
});