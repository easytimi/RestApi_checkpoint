const express = require('express');
const User = require('../model/user')
const router =express.Router();


//GET:return all users
router.get('/',async (req,res)=>{
  try{
    const   Userb = await User.find({});
    res.json(Userb) ;

  }catch(err){
    res.status(500).json({message:err.message});

  }
})

//POST:add a new user to the database
router.post('/',async (req,res)=>{
    const newUserb =  new User({
        name: req.body.name,
        email:req.body.email,
        date:Date.now
        
    })
    try{
        const Userb = await newUserb.save();
        res.status(200).json(Userb)

    }catch(err){
        res.status(400).json({message:err.message});

    }
})
//PUT:edit a user by id
router.put('/:id',getUsers,async(req,res)=>{
    if(req.body.name!==null){
        res.Userb.name = req.body.name;
    }
    if(req.body.email!==null){
        res.Userb.email = req.body.email;
    }
        
    try{
          const updateUser = await res.Userb.save();
          res.json(updateUser);

    }catch(err){
        res.status(400).json({message:err.message})

    }
})
//DELETE:remove a user by id
router.delete('/:id',getUsers,async(req,res)=>{
    try{
        const deleteONe = await res.Userb.remove();
        res.json({message:'deleted user'}) 

    }catch(err){
        res.status(400).json({message:err.message})

    }
})

async function getUsers(req,res){
    let Userb
    try{
        Userb = await User.findById(req.params.id);
        if(Userb==null){
            res.status(400).json({message:'cannot find user'})
        }
        }

    catch(err){
        res.status(500).json({message:err.message})


    }
    res.Userb=Userb;
    next();

}


module.exports = router