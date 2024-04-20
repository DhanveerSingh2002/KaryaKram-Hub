import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document
{
    _id: string,
    name: string;
}

const CategorySchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    }
})

export default models.Category || model('Category', CategorySchema);