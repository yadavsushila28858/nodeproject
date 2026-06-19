const express=require('express');
const route=express.Router();
const {index,createuser,saveuser}= require('../controller/userController');

route.get('/',index);
route.get('/createuser',createuser);
route.post('/saveuser',saveuser);

module.exports=route;