const dotenv = require("dotenv");
dotenv.config();
const { v4: uuidv4 } = require("uuid");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  PutCommand,
  DeleteCommand,
  ScanCommand,
} = require("@aws-sdk/lib-dynamodb");

const docClient = new DynamoDBClient({ regions: process.env.AWS_REGION });

//Get Assignment from DynamoDB
exports.getAssignments = async (req, res) => {
  const params = {
    TableName: process.env.aws_assignment_table_name,
  };
  try {
    const data = await docClient.send(new ScanCommand(params));
    res.send(data.Items);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

//Points from DynamoDB
exports.getPoints = async (req, res) => {
  // You should change the response below.
  const params = {
    TableName: process.env.aws_point_table_name,
  };
  try {
    const data = await docClient.send(new ScanCommand(params));
    res.send(data.Items);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

// change point from submit or trade
exports.changePoints = async (req, res) => {
  const items = this.getGroupMembers;

  const scanParams = {
    TableName: process.env.aws_point_table_name,
    Item: items
  }

  try{
    const data = await docClient.send(new ScanCommand(scanParams))
    res.send("success");
  }catch{
    console.error(err);
    res.status(500).send(err);
  }

  try{
    data = await docClient.send(new PutCommand(params))
    res.send("success");
  }catch{
    console.error(err);
    res.status(500).send(err);
  }

};
