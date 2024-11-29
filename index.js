require('dotenv').config('./env');

const app = require('./app');

app.listen(process.env.DB_PORT, ()=>{
    console.log(`Application is currently listening on http://localhost:${process.env.DB_PORT}`);
});