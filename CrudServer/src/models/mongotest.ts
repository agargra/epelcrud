import { ObjectId } from "mongodb";
import { collections } from "../services/dbmongo.service";

export class Mongotest {
	constructor(public name: string, public description: string, public id?: ObjectId) {}
}

export async function findAll() {
	return (await collections.mongotests?.find({}).toArray()) as Mongotest[];
}

export async function findOne(id: string) {
	const filter = { _id: new ObjectId(id) };
	return (await collections.mongotests?.findOne(filter)) as Mongotest;
}

export async function createOne(mongotest: any) {
	const newMongotest = mongotest as Mongotest;
	const result = await collections.mongotests?.insertOne(newMongotest);
	return {itemCount: 1, insertedId: result?.insertedId};
}

export async function updateOne(id: string, mongotest: any) {
	const filter = { _id: new ObjectId(id) };
	const updatedMongotest = mongotest as Mongotest;
	const result = await collections.mongotests?.updateOne(filter, { $set: updatedMongotest });	
	return {itemCount: result?.matchedCount};
}

export async function deleteOne(id: string) {
	const filter = { _id: new ObjectId(id) };
	const result = await collections.mongotests?.deleteOne(filter);
	return {itemCount: result?.deletedCount};
}