const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vssreelakshmi05:sreelakshmi2005@cluster0.ihvhv.mongodb.net/?retryWrites=true&w=majority&appName=cluster0")
.then(() => {
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})