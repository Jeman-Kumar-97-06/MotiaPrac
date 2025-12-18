import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name : {type:String,required:true},
    species: {type:String,required:true},
    age : {type:Number,required:true}
});

const Pet = mongoose.model('testPets',petSchema);
export default Pet;