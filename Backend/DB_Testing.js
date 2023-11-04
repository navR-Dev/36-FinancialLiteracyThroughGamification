var { MongoClient } = require("mongodb");
var request = require('request');

const uri = "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=redundantorigin';

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
        let i = 0;

        while(i < 10){
            delay(i);
            i++;
        }
        
        function delay(i){
            setTimeout(() => {
                run();
            }, 60000 * i);
        }
        
        async function run() {
            const database = client.db("Financial-Literacy-Through-Gamification");
            const coll = database.collection("Testing");
            const p = data["Global Quote"]["03. high"];
            //console.log(p);
            
            const doc = {
              price: p
            }
            const result = await coll.insertOne(doc);
            //console.log(`Inserted document`);
        }
    }
});
