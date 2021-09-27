import mysql from "mysql";
import * as dotenv from "dotenv";

export var dbMysql: mysql.Connection;

export async function connectToDBMysql () {
	dotenv.config();
	dbMysql = mysql.createConnection({
		host: process.env.DB_MYSQL_HOST,
		user: process.env.DB_MYSQL_USER,
		password: process.env.DB_MYSQL_PASS,
		database: process.env.DB_MYSQL_NAME
	});
	dbMysql.connect(function(err) {
		if (err) console.error('Error conectando con MySQL: ' + err.stack);
		else console.log(`Conectado con éxito a MysqlDB: ${process.env.DB_MYSQL_NAME}.${process.env.DB_MYSQL_TABLE}`);
	});
}