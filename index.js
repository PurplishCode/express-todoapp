const app = require('./app');
const port = 3000;

app.get('/', (req,res) => {
    res.send("Hello!");
});
app.listen(port, ()=>{
    console.log(`Application is currently listening on http://localhost:${port}`);
});