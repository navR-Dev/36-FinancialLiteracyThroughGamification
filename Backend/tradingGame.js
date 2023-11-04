var express = require("express");
var { MongoClient } = require("mongodb");

const uri = "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);
const database = client.db("FLTG");
const coll = database.collection("StockHistory");
var router = express.Router();
let compnum = 1;

async function getMarketPrice() {
  const options = {
    projection: { _id: 0 },
  };

  var compname = `Comp${compnum}`;
  var price = Math.floor(Math.random() * 1000) + 1;

  const stock = {
    Symbol: compname,
    Price: price,
    Date: "2023-11-03",
  };
  await coll.insertOne(stock);
  console.log(stock);
  compnum++;
  await coll.deleteOne(stock);
}

const myInterval = setInterval(getMarketPrice, 3000);
function stop(){
    clearInterval(myInterval);
}
setTimeout(stop, 18000);

//module.exports = router;
