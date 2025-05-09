import {Schema,model} from 'mongoose';
const productSchema= new Schema({
    name:{type: String, required:true},
    price: {type: Number, required:true},
    description: String,

});
export default model('Product', productSchema);