const User = require('../models/user');
const express = require('express');
const router = express.Router();

//post:ADD A NEW USER TO THE DATABASE 
router.post("/",(req,res)=>{
    const newUser = new User( {...req.body});
    //sauvegarde dans database
    newUser.save().then(()=>res.send('user added with success'))
    .catch((err)=>res.send(err)) ;
});

// get All user
router.get('/',(req,res)=>{
User.find().then((users)=>
res.send(users))
.catch((err)=>res.send(err));    
})
// getById
router.get('/:_id',(req,res)=>{
    let {_id}= req.params;
    User.findById({_id})
    .then((user)=>res.send(user))
    .catch((err)=>res.send(err));
});

// update :EDIT A USER BY ID 
router.put('/:_id',(req,res)=>{
    let {_id} = req.params;
    User.findByIdAndUpdate({_id},{$set:{...req.body}})
    .then(()=>res.send("user updated"))
    .catch((err)=>res.send(err));
})

// delete : REMOVE A USER BY ID 

router.delete('/:_id',(req,res)=>{
    let {_id} = req.params;
    User.findByIdAndDelete({_id})
    
    .then(()=>res.send("user deleted"))
    .catch((err)=>res.send(err));
})

module.exports = router;
