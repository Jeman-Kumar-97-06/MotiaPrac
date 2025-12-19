import {MongoClient} from 'mongodb';

const uri = process.env.MONGOURL;

if (!uri){
    throw new Error("MongoDB missing in env");
}

let client;
let db;

export async function getDb(){
    if (db) {
        return db;
    }
    client = new MongoClient(uri);
    await client.connect();
    
    db     = client.db();
    console.log("Mongo Connected");

    return db;
}