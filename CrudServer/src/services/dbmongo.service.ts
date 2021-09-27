import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { mongotests?: mongoDB.Collection } = {}

export async function connectToDBMongo () {
	dotenv.config();
	const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_MONGO_CONN as string);
	await client.connect();
	const db: mongoDB.Db = client.db(process.env.DB_MONGO_NAME);
	const mongotestsCollection: mongoDB.Collection = db.collection(process.env.DB_MONGO_COLLECTION as string);
	collections.mongotests = mongotestsCollection;
	console.log(`Conectado con éxito a MongoDB: ${db.databaseName}.${mongotestsCollection.collectionName}`);
}