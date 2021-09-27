import { dbMysql } from "../services/dbmysql.service";
import * as dotenv from "dotenv";

dotenv.config();

const DB_MYSQL_TABLE = process.env.DB_MYSQL_TABLE;

export class Mysqltest {
	constructor(public name: string, public description: string, public id?: number) {}
}

export async function findAll() {
	return new Promise(function(resolve, reject) {
		var queryString = `SELECT * FROM ${DB_MYSQL_TABLE}`;		
		dbMysql.query(queryString, function (err, result, fields) {
			if (err) return reject(err);
			resolve(result);
		});
	});	
}

export async function findOne(id: string) {
	return new Promise(function(resolve, reject) {
		var queryString = `SELECT * FROM ${DB_MYSQL_TABLE} WHERE (id = ?)`;
		var queryVar = [id];
		dbMysql.query(queryString, queryVar, function (err, result, fields) {
			if (err) return reject(err);
			resolve(result[0]);
		});
	});
}

export async function createOne(mysqltest: any) {
	return new Promise(function(resolve, reject) {
		const newMysqltest = mysqltest as Mysqltest;
		var queryString = `INSERT INTO ${DB_MYSQL_TABLE} SET ?`;
		var queryVar = { name: newMysqltest.name, description: newMysqltest.description };
		dbMysql.query(queryString, queryVar, function (err, result, fields) {
			if (err) return reject(err);
			resolve({itemCount: 1, insertedId: result.insertId});
		});
	});
}

export async function updateOne(id: string, mysqltest: any) {
	return new Promise(function(resolve, reject) {
		const updatedMysqltest = mysqltest as Mysqltest;
		var queryString = `UPDATE ${DB_MYSQL_TABLE} SET name = ?, description = ? WHERE id = ?`;
		var queryVar = [ updatedMysqltest.name, updatedMysqltest.description, id ];
		dbMysql.query(queryString, queryVar, function (err, result, fields) {
			if (err) return reject(err);
			resolve({itemCount: result.affectedRows});
		});
	});	
}

export async function deleteOne(id: string) {
	return new Promise(function(resolve, reject) {
		var queryString = `DELETE FROM ${DB_MYSQL_TABLE} WHERE id = ?`;
		var queryVar = [ id ];
		dbMysql.query(queryString, queryVar, function (err, result, fields) {
			if (err) return reject(err);
			resolve({itemCount: result.affectedRows});
		});
	});	
}