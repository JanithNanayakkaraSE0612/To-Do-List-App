const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ListModel = require('./model/List')
console.log(express);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DB_URL = 'mongodb+srv://janith:todolistApp@user.badthcc.mongodb.net/todo?retryWrites=true&w=majority&appName=user'

//get List 
app.get('/',(req,res)=>{
    ListModel.find({}
        .then(list => res.json(list))
        .catch(err => res.json(err)))
})
// get list id

app.get('/get/:id',(req,res)=>{
    const id = req.params.id;
    ListModel.findById({_id:id})
    .then(list => res.json(list))
    .catch(err=> res.json(err))
})

// create list

app.post('/create',(req,res)=>{
    ListModel.create(req.body)
    .then(list => res.json(list))
    .catch(err => res.json(err))
})
//update list 

app.put('/update/:id',(req,res)=>{
    const id = req.params.id;
    ListModel.findByIdAndUpdate({_id:id},(title:req.body.title, description:req.body.description))
    .then(list => res.json(list))
    .catch(err=> res.json(err))
})

//delete list

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    ListModel.findByIdAndDelete({_id:id})
    .then(list => res.json())
    .catch(err => res.json(err))
})
mongoose.connect(DB_URL,{
}).then(()=>{
    console.log('DB Connected');
}).catch((err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log(`Server is Running ${PORT}`);
})