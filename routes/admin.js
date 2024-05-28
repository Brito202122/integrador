const path = require('path');
const express = require('express');

const rootDir =  require('../helpers/path');
const bodyParser = require('body-parser');

const router = express.Router();

const restaurantes =[]; // no futuro isso vai ser uma lista encadeada(?)

router.get('/cadastro',(req,res,next)=>{

    res.render('cadastro',{ 
        restaurante: restaurantes,
        pageTitle: 'Marmit'
        
    });
    
   //res.sendFile(path.join(rootDir,'views','cadastro.html'));
    });


router.post('/cadastro',(req,res,next)=>{
 
    restaurantes.push({nome: req.body.nome})
 //console.log(req.body);
    res.redirect('/');
   // res.send("<h1> Cadastro feito! </h1>");


});

//module.exports = router;
exports.routes = router;
exports.restaurantes = restaurantes;