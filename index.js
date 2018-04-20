const express= require('express');
const app=express();

app.get('/personas',function(req,res){
    app.send(
"Hola"
    )
});
app.listen(5000);