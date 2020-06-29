var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://project:project@todo-fva2j.mongodb.net/test?retryWrites=true&w=majority');
//mongodb+srv://<username>:<password>@todo-fva2j.mongodb.net/<dbname>?retryWrites=true&w=majority
var todoSchema = new mongoose.Schema({
    id:String, name:String, email:String, tel:Number
});

var Details_record  = mongoose.model('Details_record',todoSchema);
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){
    app.get('/login',function(req,res){
        // get data from mongodb and pass view
        Details_record.find({},function(err,data){
               if(err) throw err;
               res.render('login');  
           }); 
       });
    app.post('/login',urlencodedParser,function(req,res){
        //get the data from the mongodb and add view
       var newTodo = Details_record(req.body).save(function(err,data){
            if(err) throw err;
             res.render('login');  
       });           
    });
};