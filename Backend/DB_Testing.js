var { MongoClient } = require("mongodb");
var request = require('request');

const uri = "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);
let sym = 'IBM';

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${sym}&apikey=redundantorigins`;

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
        var dates = ["2000-01-31", "2001-06-29", "2002-01-31", "2002-06-28", "2003-01-31", "2003-06-30", "2004-01-30", "2004-06-30", "2005-01-31", "2005-06-30",
        "2006-01-31", "2006-06-30", "2007-01-31", "2007-06-29", "2008-01-31", "2008-06-30", "2009-01-30", "2009-06-30", "2010-01-29", "2010-06-30"]
        let ind = 0;
        
        async function run() {
            const database = client.db("Financial-Literacy-Through-Gamification");
            const coll = database.collection("Testing");
            const p = data["Monthly Adjusted Time Series"];
            
            const doc = {
              name: sym,
              price: p,
              date: dates[ind]
            }
            console.log(doc);
            //const result = await coll.insertOne(doc);
            //console.log(`Inserted document`);
            ind++;
        }
        var myInterval = setInterval(run, 3000);
        setTimeout(() => {
          clearInterval(myInterval);
        }, 630000);
    }
});