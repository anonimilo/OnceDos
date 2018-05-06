
const MongoClient= require('mongodb').MongoClient,
express=require('express'),
engines=require('consolidate');
handle = require('handlebars');
var app=express(),
db;

app.engine('hbs',engines.handlebars);

app.set('views','./views');
app.set('view engine','hbs');

MongoClient.connect('mongodb://localhost:27017',function(err,client){
if(err) throw

db=client.db('test');
app.listen(1234);

});


app.get('/',(req,res)=>{


var prod = db.collection('conos')
.find()

prod.toArray((err,result)=>{
    console.log('holiwis')
res.render('index',{
productos:result

});

})


});
