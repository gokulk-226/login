const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/LIC");
connect.then(()=>{
    console.log("DB CONNECTED");
})
.catch(()=>{
    console.log("DB NOT CONNECTED");
})
const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});
const collection = new mongoose.model("user",LoginSchema);
module.exports = collection;