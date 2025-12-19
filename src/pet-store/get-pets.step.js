import {getDb} from '../db/mongo.js';
export const config = {
    name:"GetPets",
    type:"api",
    path:"/pets",
    method:"GET",
    emits:[]
};

export const handler = async (req,{logger}) => {
    const db   = await getDb();
    const msgs = await db.collection('messages').find({name:"JuJu"}).toArray();
    logger.info(msgs[0]["age"])
    return {status:200,body:"Success"}
    // const msgs2= await msgs.json();
    // return {status:200,body:{msgs2}};
}