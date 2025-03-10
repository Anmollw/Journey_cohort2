const express = require("express")
const app = express();
const { createtodo,updatetodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")

app.use(express.json());
app.use(cors({}));


app.post("/todo",async (req,res)=>{
    const createtd= req.body;
    const parsedtd = createtodo.safeParse(createtd);
    if(!parsedtd.success){
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createtd.title,
        description : createtd.description,
        completed : false
    })

    res.json({
        message : "Todo created successfully"
    })


});

app.get("/todos",async (req,res)=>{
    const todos= await todo.find();

    res.json({
        todos
    })

})

app.put("/completed",async (req,res)=>{
    const updatetd = req.body
    const parsedtd = updatetodo.safeParse(updatetd);
    if(!parsedtd.success){
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return;
    }
    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        message : "Todo marked as complete"
    });

});

app.listen(3000);