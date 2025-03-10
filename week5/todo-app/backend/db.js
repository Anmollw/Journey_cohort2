const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://anmolwadhwa2006:Hu4N2AejuUh7A82Z@nmol.kfxng.mongodb.net/todo-app")


const todoschema = mongoose.Schema({
    title : String,
    description: String,
    completed : Boolean
});

const todo=mongoose.model('todos',todoschema);

module.exports={
    todo
}

