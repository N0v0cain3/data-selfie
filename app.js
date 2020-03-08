var express=require('express');
var app=express();

app.use(express.static('public'));

app.post('/api',function(req,res){
    console.log(req)
})


app.listen(3000,function(){
    console.log("listening at 3000");
})