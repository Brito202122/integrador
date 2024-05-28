const path = require('path');
const express = require('express');


const rootDir =  require('../helpers/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req,res,next)=>{
//console.log(adminData.restaurantes);
const restaurantes = adminData.restaurantes;
res.render("client");
   // res.sendFile(path.join(rootDir,'views','client.html'));
    
    });


module.exports = router;
