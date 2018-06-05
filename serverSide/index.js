console.log("Hello world");

const express = require('express');

const app = express();


app.get('/', function(req,res){
  res.send(
    'Hello world'
  );

});

app.listen(3000, function(){
  console.log('Server Started on port 3000');
})
