console.log("Hello world");

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB();
const fs = require('fs');

const app = express();

aws.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
  accessKeyId: "AKIAIZADRCZW3CR6E2KA",
  secretAccessKey: "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"
});
// aws.config.loadFromPath('');

var docClient = new aws.DynamoDB.DocumentClient();
var table = "fridayProject";
var params = {
  TableName: table,
  Key:{
    "pk":1
  }
};

docClient.get(params, function(err,data){
  if(err){
    console.error("Unable to read Item. Error Json",
    JSON.stringify(err,null,2));
  } else{
    console.log("Get Item Succeedded", JSON.stringify(data,null,2));
  }
});

app.get('/', function(req,res){
  res.send(
    'Hello world'
  );
});
//
// app.listen(3000, function(){
//   console.log('Server Started on port 3000');
// })
