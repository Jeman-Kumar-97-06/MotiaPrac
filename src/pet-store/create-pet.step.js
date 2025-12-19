import Pet from '../../models/petModel';
import {getDb} from '../db/mongo.js';

export const config = {
    name : "CreatePet",
    type : "api",
    path : "/pets",
    method : "POST",
    emits : []
};



export const handler = async (req,{logger}) => {
    const b         = req.body || {};
    const name      = typeof b.name ==='string' && b.name.trim();
    const speciesOk = ['dog','cat','bird','other'].includes(b.species);
    const ageOk     = Number.isFinite(b.ageMonths);

    if (!name || !speciesOk || !ageOk){
        return {status:400, body:{message:"Invalid payload"}}
    }

    const db = await getDb();

    // const newPet    = await Pet.create({name,species:b.species,age:b.ageMonths})
    const newPet = await db.collection("messages").insertOne({
        name:b.name,
        species:b.species,
        age:b.ageMonths
    });
    

    logger.info("Result",newPet)
}