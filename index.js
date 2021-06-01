var express = require("express");
var app     = express();
var path    = require("path");


app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.get('/aboutme',function(req,res){
  res.sendFile(path.join(__dirname+'/public/aboutme.html'));
});

app.get('/contactme',function(req,res){
  res.sendFile(path.join(__dirname+'/public/contactme.html'));
});

app.listen(process.env.PORT || 500);
console.log('working on 500');