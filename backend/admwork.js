const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
dotenv.config({path : './config.env'});

require('../db/conn');
const Admin = require("../model/adminSchema");
router.get('/home_page',(req,res)=>{
    res.send('hi from router js serveradmin');
})
router.post('/supregister',async(req,res) =>{

    // destructuring
    const {resname , email, phone  , password , cpassword } = req.body;

    // console.log(name);
    // console.log(req.body.work);
    // res.send("my router");
    // res.json({message:req.body});

    if(!resname  ||!email || !phone || !password || !cpassword){
        return res.status(422).json({error:"please fill all th details"});
    }

   try{
    const userExists = await Admin.findOne({email:email});
    if(userExists){
        return res.status(423).json({error:"user already exist"});
 
    }
    else if(password != cpassword){
        return res.status(425).json({error:"enter correct password"});
    }
    else{
        const admin = new Admin({resname,email,phone,password,cpassword});
     await admin.save();
   
    res.status(201).json({message:"registered successfully"});


   }

    }
    catch(err){
    console.log("error");
   }
 
}); 

router.post('/reserlogin',async(req,res)=>{
    try{
        // let token;
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"fill complete data"})
        }
        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
             token = await  userLogin.generateAuthToken();
             console.log(token);
            
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+2589200000000),
                httpOnly:true
            });
            
             if(!isMatch){
                res.status(412).json({message:"invalid passwordtry again "});
            }
            else{ 
            res.json({message:"login successfull"});
           
            }
        }
        else{
            res.status(405).json({message:"invalid details try again "});

        }

    }
    catch(err){
        console.log(err);
    }
}


)
// router.post('/suplogin',async(req,res)=>{
//     try{
//         let token;
//         const {email,password} = req.body;

//         if(  !email || !password){
//             return res.status(400).json({error:"fill complete data"})
//         }
//         const adminLogin = await Admin.findOne({email:email});

//         if(adminLogin){
//             const isMatches = await bcrypt.compare(password,adminLogin.password);
//              token = await  adminLogin.generateAuthToken();
//             console.log(token);
//             res.cookie("jwt_oken",token,{
//                 expires:new Date(Date.now()+258920000),
//                 httpOnly:true
//             });
//             // const token = jwt.sign(
//             //     {
//             //       name: Admin.name,
//             //       email: Admin.email,
//             //     },
//             //     'secret456'
//             //   )
//              if(!isMatches){
//                 res.status(412).json({message:"invalid password try again "});
//             }
//             else{ 
//             res.json({message:"login successfull"});
//             }
//         }
//         else{
//             res.status(405).json({message:"invalid details try again "});

//         }

//     }
//     catch(err){
//         console.log(err);
//     }
// })

    
module.exports = router;


