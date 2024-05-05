//ek ek url wlt ynna routes hadaagnnas oni 
//exprees use krl

//import express
const express = require('express');
//roter instance ek declare kirima
const router= express.Router();
//controlller page ek import krn nthuw functon em access krnn bh
const controller =require('./controller');

//services 4t routes 4 k create krmu
router.get('/users',controller.getUsers);
router.post('/createuser',controller.addUser);
router.put('/updateuser',controller.updateUser);
router.delete('/deleteuser',controller.deleteUser);

module.exports=router;