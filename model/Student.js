const mongoose = require('mongoose');

var schema=mongoose.Schema({
    Reg_No:Number,
    Name:String,
    Age:Number,
    Dept:String,
    
})

var StudentModel=mongoose.model("student",schema)
module.exports= StudentModel