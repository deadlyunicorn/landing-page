import { MongoClient } from "mongodb";

export const mongoClient = new MongoClient( String( process.env.MONGODB_URI ) );