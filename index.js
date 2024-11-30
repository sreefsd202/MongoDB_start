//import
const express = require("express")
require("./connection")
var empModel = require("./model/employee")
//initialize
var app = express();

//midd
app.use(express.json());

//api creation
//ADD
app.post('/add',async (req,res)=>{
    try {
        await empModel(req.body).save()
        res.send({message:"data added "});

    } catch (error) {
        console.log(error);
    }
});

//VIEW
app.get('/view',async (req,res)=>{
    try {
        const data = await empModel.find()
        res.send(data);

    } catch (error) {
        console.log(error);
    }
});

//DELETE
app.delete("/remove/:id",async (req,res)=>{
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send("data deleted");

    } catch (error) {
        console.log(error);
    }
});


//UPDATE
app.put("/update/:id",async (req,res)=>{
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("data updated");

    } catch (error) {
        console.log(error);
    }
});

//port setting
app.listen(3004,() => {
    console.log("port is running");
});