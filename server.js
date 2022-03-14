const express=require('express');

const app=express();

app.get('/',(req,res)=>res.send('Hola con Express!'))

app.listen(3000);
console.log('Escucho en 3000');