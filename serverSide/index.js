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

const calendar = require('./http/calendarIndex');
const user = require('./http/userIndex');

//app configuration
//====================================================
app.use(bodyParser.json());
app.use(cors())
app.use('/calendar',calendar);
app.use('/user',user);

app.listen(3000, function(){
  console.log('Server Started on port 3000');
});
