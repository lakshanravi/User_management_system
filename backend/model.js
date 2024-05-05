//user data structure ekt (array ekt) model ekk hadagmu

const mongoose =require('mongoose');
const Schema = mongoose.Schema;

//user kenek komd inna oni kyl penwna podi schema ekk
const userSchema = new Schema({
    id:Number,
    name:String,

});

//uda hafagttu userschema model ek user kyl ekkt assign krnw
const User = mongoose.model('User', userSchema);
//dan user model ek module ekk widiht export krgnnw
module.exports=User;

//me model ek nisa validate wenw DB ek. waradi data type em enter krnn bari wenw