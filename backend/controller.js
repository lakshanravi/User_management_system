//get APi eke data set ek methana hdmu. mewa thama request klama frontend eke penwnne API ek mgin pasuwa. me tika comment krnw dan DB ekk hdn nisa mewt

// const users = [
//   {
// id:1,
// name:'prasad',
//   },
//   {
//     id:2,
//     name:'prasadi',
//    },
//   {
//         id:3,
//         name:'lakshan',
//    },
// ];
//dan me data set ek return krnn controller function ekk hdnn oni

//usersla okkoma gnna function ekk. illna de return krnw me call back function eke
// const getUsers= (cb) =>{
//   cb(users);
// };

// //id pass krl ek user kenek vitrk gnna hdnna
// const getUserById= (id,cb) =>{
//   const user = users.find(user=>user.id == id);
//   cb(user);
// };
// //uda hoyagnnw userwa users.find mgin.. userge id ek samanad blnw api pass krn id eket
// //pasuwa cll back function ekedi e userw return krnw

// exports.getUsers= getUsers;
// exports.getUserById=getUserById;

//uda tika klin widiht adaala ew




//ape services tika liymu den(crud -create,update,retreive,delete)services tikt . event 4 t
//model ek import krn imu hadaagtta
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