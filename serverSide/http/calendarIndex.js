app.use(bodyParser.json());
app.use(cors())
aws.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
  accessKeyId: "AKIAIZADRCZW3CR6E2KA",
  secretAccessKey: "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"
});

var docClient = new aws.DynamoDB.DocumentClient();
var qitable = "fridayProject";
var kbtable = "calendar";
var params;


router.use(function(req,res,next){
  console.log('Something is happening.');
  next();
});
//Kyungbae Page
//List Page
//####################################################################
router.get('kb/', function(req,res) {
  console.log('Loading the list');
  params = {
    TableName: kbtable,
    Limit: 30
    // IndexName : 'pk',
    //KeyConditionExpression: 'articleId =:x',
    //ExpressionAttributeValues: { ':x' : ARTICLE_ID}
  };
  docClient.scan(params, function(err,data){
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

router.post('kb/', function(req,res) {
  console.log('Creating the item');
  console.log('Req.params');
  console.log(req.params.pk);
  console.log('REQ Body');
  console.log(req.body);

  params = {
    TableName: kbtable,
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
// KB Page.
//########################################################################
router.get('kb/:pk', function(req,res) {
  pk =  Number(req.params.pk);
  console.log('Loading the list #'+pk);
  params = {
    TableName: kbtable,
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

router.put('kb/:pk', function(req,res) {
  pk =  Number(req.params.pk);
  console.log('Updating the list #'+pk);
  console.log(req.body);
  console.log(req.body.name);
  params = {
    TableName: table,
    Key: pk,
    UpdateExpression: "set address=address, job=job",
    ExpressionAttributeValues: JSON.stringify(req.body),
    ReturnValues:"UPDATED_NEW"
    //ConditionExpression: "size(info.actors > :num)"
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

router.delete('kb/:pk', function(req,res) {
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
