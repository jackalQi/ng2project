//Declartion
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = express.Router();

const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB();
const fs = require('fs');

const app = express();
var myData;

//app configuration
//====================================================
app.use(bodyParser.json());
app.use(cors())
aws.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
  accessKeyId: "AKIAIZADRCZW3CR6E2KA",
  secretAccessKey: "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"
});
// aws.config.loadFromPath('credentials.json');
//To get the configuration from file


//DynamoDB
//====================================================
var docClient = new aws.DynamoDB.DocumentClient();
var table = "fridayProject";
var params;

//ROUTING
//====================================================
// app.get('/', function(req,res){
//   res.send(
//     myData
//   );
// });
//
// app.post('/', function(req,res){
//   res.send(
//     'post'
//   );
// });
// app.put('/', function(req,res){
//   res.send(
//     'put'
//   );
// });
// app.delete('/:id', function(req,res){
//
// });

router.use(function(req,res,next){
  console.log('Something is happening.');
  next();
});

//List Page
//####################################################################
router.get('/', function(req,res) {
  console.log('Loading the list');
  params = {
    TableName: table,
    Key:{
      "pk":2
    }
  };
  docClient.get(params, function(err,data){
    if(err){
      console.error("Unable to read Item. Error Json",
      JSON.stringify(err,null,2));
      res.send('Error');
    } else{
      console.log("Get Item Succeedded", JSON.stringify(data,null,2));
      myData = data;
      res.json(myData);
    }
  });
});

router.post('/', function(req,res) {
  console.log('Creating the item');
  console.log('Req.params');
  console.log(req.params.pk);
  console.log('REQ Body');
  console.log(req.body);

  params = {
    TableName: table,
    Item: req.body
  };// Turn Item to item Dict
  docClient.put(params, function(err,data){
    if(err){
      console.error("Unable to read Item. Error Json",
      JSON.stringify(err,null,2));
      res.send('Error');
    } else{
      console.log("Post Item Succeedded", JSON.stringify(data,null,2));
      res.json(myData);
    }
  });
});

// Detail Page
//########################################################################
router.get('/:pk', function(req,res) {
  pk =  Number(req.params.pk);
  console.log('Loading the list #'+pk);
  params = {
    TableName: table,
    Key:{
      "pk": pk
    }
  };
  docClient.get(params, function(err,data){
    if(err){
      console.error("Unable to read Item. Error Json",
      JSON.stringify(err,null,2));
    } else{
      console.log("Get Item Succeedded", JSON.stringify(data,null,2));
      myData = data;
      res.json(myData);
    }
  });
});

router.put('/:pk', function(req,res) {
  pk =  Number(req.params.pk);
  console.log('Updating the list #'+pk);
  params = {
    TableName: table,
    Key: req.body
  };
  docClient.update(params, function(err,data){
    if(err){
      console.error("Unable to Update Item. Error Json",
      JSON.stringify(err,null,2));
    } else{
      console.log("UpdateItem Succeedded", JSON.stringify(data,null,2));
      myData = data;
      res.json(myData);
    }
  });
});

router.delete('/:pk', function(req,res) {
  pk =  Number(req.params.pk);
  console.log('Delete #'+pk);
  params = {
    TableName: table,
    Key:{
      "pk": pk
    }
  };
  docClient.delete(params, function(err,data){
    if(err){
      console.error("Unable to Delete Item. Error Json",
      JSON.stringify(err,null,2));
    } else{
      console.log("DeleteItem Succeedded", JSON.stringify(data,null,2));
    }
  });
});

app.use('/api',router);

app.listen(3000, function(){
  console.log('Server Started on port 3000');
});
