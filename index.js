const AWS = require('aws-sdk');
const e = require('express');
const config = {
  "apiVersion": "2012-08-10",
  "accessKeyId": "osb1z9",
  "secretAccessKey": "xuvd4",
  "region":"us-east-1",
  "endpoint": "http://localhost:8000"
}
const dynamodb = new AWS.DynamoDB(config);
// let params = {
//   AttributeDefinitions :[
//     {
//       AttributeName : "Employee_Name",
//       AttributeType : "S"
//     },
//     {
//       AttributeName : "Employee_ID",
//       AttributeType : "N"
//     }
//   ],
//   KeySchema : [{
//     AttributeName : "Employee_ID",
//     KeyType : "HASH"
//   },
//   {
//     AttributeName : "Employee_Name",
//     KeyType : "RANGE"
//   }
//   ],
//   ProvisionedThroughput :{
//     ReadCapacityUnits : 1,
//     WriteCapacityUnits : 1
//   },
//   TableName : "EMPLOYEE"
// };
// dynamodb.createTable(params , function(error,data){
//   if(error){
//     console.log("ERROR",error)
//   }else{
//     console.log("Table created",data)
//   }
// });

// let itemParams ={
//   TableName : "EMPLOYEE",
//   Item : {
//     'Employee_ID':{N:'5'},
//     'Employee_Name': {S:"Usman"}
   
//   }
// };
// dynamodb.putItem(itemParams,function(err,data){
//   if(err){
//     console.log('ERROR',err)
//   }
//   else{
//     console.log('item added',data)
//   }
// })

// let params = {
//   RequestItems : {
//     "EMPLOYEE": [{
//       PutRequest :{
//         Item:{
//           "Employee_Name":{
//             S: "Sarmad"
//           },
//           "Employee_ID":{
//             N :"2"
//           }
//         }
//       },
//       PutRequest :{
//         Item:{

//           "Employee_Name":{
//             S: "Uzair"
//           },
//           "Employee_ID":{
//             N :"3"
//           }
//         }},
//         PutRequest:{
//         Item:{
//             "Employee_Name":{
//               S :"Rustam"
//             },
//             "Employee_ID":{
//               N: "4"
//             }
//           }
//         },
//         PutRequest:{
//           Item:{
//             "Employee_Name":{
//               S: "Usman"
//             },
//             "Employee_ID":{
//               N:"5"
//             }
//           }
//         }
//     }
//   ]
//   }
// }
// dynamodb.batchWriteItem(params, function(err,data){
//   if(err){
//     console.log("ERROR",err);
//   }else{
//     console.log("items added",data)
//   }
// })

// let itemParams ={
//   TableName : "EMPLOYEE",
//   Item : {
//     'Employee_ID':{N:'2'},
//     'Employee_Name': {S:"Sarmad"}
   
//   }
// };
// dynamodb.putItem(itemParams,function(err,data){
//   if(err){
//     console.log('ERROR',err)
//   }
//   else{
//     console.log('item added',data)
//   }
// });

// let itemParams2 ={
//   TableName : "EMPLOYEE",
//   Item : {
//     'Employee_ID':{N:'3'},
//     'Employee_Name': {S:"Uzair"}
   
//   }
// };
// dynamodb.putItem(itemParams2,function(err,data){
//   if(err){
//     console.log('ERROR',err)
//   }
//   else{
//     console.log('item added',data)
//   }
// });
// let itemParams3 ={
//   TableName : "EMPLOYEE",
//   Item : {
//     'Employee_ID':{N:'4'},
//     'Employee_Name': {S:"Rustam"}
   
//   }
// };
// dynamodb.putItem(itemParams3,function(err,data){
//   if(err){
//     console.log('ERROR',err)
//   }
//   else{
//     console.log('item added',data)
//   }
// });

// let getParams={
//   TableName : "EMPLOYEE",
//   Key :{
//         "Employee_Name": {S:"Usman"},
//        "Employee_ID": {N: "5"}
//   },
//   ProjectionExpression : 'Employee_Name'

// };

// dynamodb.getItem(getParams,function(err,data){
//   if(err){
//     console.log("ERROR",err);
//   }else{
//     console.log("done",data.Item)
//   }
// })

// let deletParams ={
//   TableName : "EMPLOYEE",
//   Key :{
//     "Employee_Name":{S:"Usman"},
//     "Employee_ID": {N:"5"}
//   } 
// }
// dynamodb.deleteItem(deletParams,function(err,data){
//   if(err){
//     console.log("ERROR",err)
//   }else{
//     console.log("Done",data)
//   }
// })

