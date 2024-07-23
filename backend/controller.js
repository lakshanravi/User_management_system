
const { response } = require('express');
const User = require('./model');


//next eken krnne req, respond eken psu ilaga activity ek krnna yaama
//user kenek gnna function ek
const getUsers= (req,res,next) =>{
  //mongodb wl user kenek hri data hri hoyagnna tyna method ek tma find kynne
    User.find()
        .then(response => {
          //response ek json response ekk widiht return krnw.json array ek widiht convert krl
          res.json({response})
        })
        //catch ekth denna oni monwd enn puluwbn errors kyl
        .catch(error => {
          res.json({message: error})
        });
   };
  

   //dan user create krn function ek
   const addUser=(req,res,next)=>{
      //user kenek hadagmu mulin
      const user = new User({
        //me yata ew pass krn front end ek haraha . e mgin user kenek hadaagnnw(req.body.id  harahaa id ek em paass krnw)
        id: req.body.id,
        name:req.body.name,
      });
      user.save()
        .then(response => {
          res.json({response})
        })
        
        .catch(error => {
          res.json({message: error})
        });
   };
      
   //user edit krn function ek
   const updateUser = (req,res,next)=>{
      //request body eke tyna me keys dekt adaala value gnna kyl kynne me(id ha name t adaala)
      const{id,name} = req.body;
      //api ewpu id ekt adaalw set krnw ita adaala name ekth
      User.updateOne({id:id},{$set:{name:name}})
      .then(response => {
        res.json({response})
      })
      
      .catch(error => {
        res.json({message: error})
      });
   }

   const deleteUser = (req,res,next)=>{
      const id = req.body.id; //meke id ek vitrk gttm athi dele krnn oni eke

      User.deleteOne({id:id})
      .then(response => {
        res.json({response})
      })
      
      .catch(error => {
        res.json({message: error})
      });

   }
   //dan function tik export krgmu

   exports.getUsers=getUsers;
   exports.addUser=addUser;
   exports.updateUser=updateUser;
   exports.deleteUser=deleteUser;
