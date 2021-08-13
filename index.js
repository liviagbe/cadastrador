// primeiro app web yay \o/ (socorro ;-;)

const express = require ("express"); //o node identifica que o express está sendo usado
const app = express(); //e aqui identifica que é uma aplicação
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const address = "localhost"; //IP do meu pc (127.0.0.1) | TCP-IP | serve pra rodar a app web local
const port = 3030 //porta a ser usada

//users | podem ser vistas em qualquer lugar do código por causa da "global"
global.users =[
    {name:"Wellington W. F. Sarmento",address:"Rua Dom Jeronimo, 666",email:"wwagner@virtual.ufc.br",age:46,height:1.70,vote:true},
    {name:"PAtricia S. Paula",address:"Rua Dom Jeronimo, 666",email:"patricia@virtual.ufc.br",age:46,height:1.70,vote:true},
    {name:"Henrique Sérgio L. Pequeno",address:"Rua do Henrique, 666",email:"henrique@virtual.ufc.br",age:46,height:1.70,vote:true}];

//ativando o uso do ejs e do express-ejs-layouts
app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); //query string
app.use(express.json()); //JSON

app.use('/', routes); //cria as rotas que não estão no routes 

//servidor simples com node e express
const server = app.listen(port, address, () =>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);

})//vai indicar se o servidor tá rodando direitinho e em qual porta