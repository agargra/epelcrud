import express from 'express';
import * as dotenv from "dotenv";
import { connectToDBMongo } from "./services/dbmongo.service"
import { connectToDBMysql } from "./services/dbmysql.service";
import { appRouter } from "./routes/app.router";

const cors = require('cors');

dotenv.config();

if (!process.env.PORT){
	console.log(`Error to get ports`);
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/api', appRouter);

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	connectToDBMongo();
	connectToDBMysql();
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/templates/index.html");
});