const express=require("express")
const cors=require("cors");

var bodyParser = require('body-parser')




const app=express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());




const phoneBooks=[]

phoneBooks.push({firstName:"ehsan",lastName:"test",number:21111212})

app.listen(3003)

app.get("/users",(req,res)=>{
    
   return  res.send(JSON.stringify(phoneBooks))
})
app.post("/search",(req,res)=>{
    
   return  res.send(JSON.stringify(phoneBooks))
})

app.post("/add",(req,res)=>{
    const {firstName,lastName,number}=req.body;
    phoneBooks.push({firstName,lastName,number})
    res.sendStatus(200)
})