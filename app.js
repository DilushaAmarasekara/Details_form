var express = require('express');
var todoController = require('./controllers/todoControllers');
var app=express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controllers
loginController(app);
 
//listen to port
app.listen(8000);
console.log('you are listen to port 3000');
