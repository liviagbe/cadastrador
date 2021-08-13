//rotas vinculadas à aplicação final

const express = require("express");
const router = express.Router(); //objeto do tipo router (código do express que implementa rotas)
// const faker = require("faker");

// let db = require("./db");

// db.criarDB("minhaBaseDados");


router.use(express.static('public')); //a pasta com arquivos estáticos

router.get('/',(req,res)=>{ //request | response
    res.render('pages/home');
});

router.get('/about',(req,res)=>{ 

    res.render('pages/about');
});

router.get('/cadastro',(req,res)=>{ 
    res.render('pages/cadastro',{users:users}); //recebe um objeto chamado users e com valor igual ao vetor users
});

router.post('/cadastro/remove',(req,res)=>{
    let item =req.body.id; //pega o valor  id e atribui à variável item 

    users.splice(item,1); //permite adicionar ou remover um item do vetor em uma posição
    //res.render('pages/cadastro',{users:users});
    console.log("Elementos cadastrados: ",users);
    res.sendStatus(200); //envia mensagem dizendo que as modificacoes foram ok
});



router.post('/cadastro/update',(req,res)=>{
    //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    users[req.body.id].name=req.body.name;
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].age=req.body.age;
    users[req.body.id].height=req.body.height;
    users[req.body.id].vote=req.body.vote;

    console.log("Dados recebidos: ",req.body);//mostra no console do servidor os dados recebidos

    res.sendStatus(200); //envia a mensagem "200" significando que as modificacoes foram ok
});

router.get('/cadastro/list',(req,res)=>{

});


module.exports = router; //faz com que oo código seja exportado como um módulo e usado em outras partes da app

