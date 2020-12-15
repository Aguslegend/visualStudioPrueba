const { json } = require('express');
let db=require('mysql');
let pool=db.createPool({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'tienda'
})

const getAllClients = (request,response)=>{
    //el request
    let q="SELECT * FROM clientes";
    pool.query(q,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
            response.status(200).json(result);
        }
    })
}
const getClientById = (request,response)=>{
    //el request
    let id=request.params.id;
    let q=`SELECT * FROM clientes WHERE id=${id}`;
    pool.query(q,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
            response.status(200).json(result);
        }
    })
}

module.exports={
    getAllClients,
    getClientById
}