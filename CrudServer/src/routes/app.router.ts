import express, { Request, Response } from "express";
import * as MongotestModel from "../models/mongotest";
import * as MysqltestModel from "../models/mysqltest";


export const appRouter = express.Router();
appRouter.use(express.json());

let getModel = function(dbType: string) {
	var Model: any; 
	switch(dbType) { 
		case "mysql": { Model = MysqltestModel; break; } 
		default: { Model = MongotestModel; break; } 
	}
	return Model;
};

//READ
appRouter.get("/:dbtype", async (req: Request, res: Response) => {
	const dbtype = req?.params?.dbtype;
	const Model = getModel(dbtype);
	try {
		const result = await Model.findAll();
		res.status(200).send({ error: false, data: result, message: 'Listado de elementos' });
	} catch (error: any) {
		res.status(500).send({ error: true, message: error.message });
	}
});
appRouter.get("/:dbtype/:id", async (req: Request, res: Response) => {
	const id = req?.params?.id;
	const dbtype = req?.params?.dbtype;
	const Model = getModel(dbtype);
	try {
		const result = await Model.findOne(id);
		result
			? res.status(200).send({ error: false, data: result, message: `Encontrado elemento con id ${id}` })
			: res.status(500).send({ error: true, message: `Elemento con id ${id} no existe` });
	} catch (error: any) {
		res.status(500).send({ error: true, message: error.message });
	}
});

//CREATE
appRouter.post("/:dbtype/create", async (req: Request, res: Response) => {
	const dbtype = req?.params?.dbtype;
	const Model = getModel(dbtype);
	try {
		const result = await Model.createOne(req.body);
		result
			? res.status(201).send({ error: false, data: result, message: `El elemento con id ${result.insertedId} se ha creado correctamente` })
			: res.status(500).send({ error: true, message: 'Error al crear elemento' });
	} catch (error: any) {
		console.error(error);
		res.status(400).send({ error: true, message: error.message });
	}
});

//UPDATE
appRouter.put("/:dbtype/update/:id", async (req: Request, res: Response) => {
	const id = req?.params?.id;
	const dbtype = req?.params?.dbtype;
	const Model = getModel(dbtype);	
	try {
		const result = await Model.updateOne(id, req.body);
		if (result){
			result.itemCount
				? res.status(202).send({ error: false, data: result, message: `Elemento con id ${id} se ha actualizado correctamente` })
				: res.status(404).send({ error: true, message: `Elemento con id ${id} no existe` });
		} else {
			res.status(400).send({ error: true, message: `Error al actualizar elemento con id ${id}` });
		}		
	} catch (error: any) {
		console.error(error.message);
		res.status(400).send({ error: true, message: error.message });
	}
});

//DELETE
appRouter.delete("/:dbtype/delete/:id", async (req: Request, res: Response) => {
	const id = req?.params?.id;
	const dbtype = req?.params?.dbtype;
	const Model = getModel(dbtype);		
	try {
		const result = await Model.deleteOne(id);
		if (result){
			result.itemCount
				? res.status(202).send({ error: false, data: result, message: `Elemento con id ${id} se ha eliminado correctamente` })
				: res.status(404).send({ error: true, message: `Elemento con id ${id} no existe` });
		} else {
			res.status(400).send({ error: true, message: `Error al actualizar elemento con id ${id}` });
		}
	} catch (error: any) {
		console.error(error.message);
		res.status(400).send({ error: true, message: error.message });
	}
});