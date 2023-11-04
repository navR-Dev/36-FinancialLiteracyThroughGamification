import { MongoClient } from "mongodb";

const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);

let i = 0;

while(i < 10){
    delay(i);
    i++;
}

function delay(i){
    setTimeout(() => {
        run();
    }, 3000 * i);
}

async function run() {
    const database = client.db("Financial-Literacy-Through-Gamification");
    const coll = database.collection("Testing");
    
    const doc = {
      value: i
    }
    const result = await coll.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
}
