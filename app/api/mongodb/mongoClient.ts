import { MongoClient } from "mongodb";

let mongoClient = new MongoClient( String( process.env.MONGODB_URI ) );

export default mongoClient;