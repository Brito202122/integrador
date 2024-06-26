const express = require('express');
const bodyParser =  require('body-parser');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const  adminData = require('./routes/admin');
const  clientRouter = require('./routes/client');



app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(adminData.routes);
app.use(clientRouter);

app.use((req,res,next)=>{
res.status(404).send('<h1> Page not found</h1>');


});


app.listen(3000);
