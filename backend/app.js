import express from "express";

const app=express();

app.get('/api/message',(req,res)=>{
    res.status(200).json({
        message:"this is a basic project for Business Angel (Baguio, Philippines)"
    });
})



const PORT=3000;
app.listen(PORT,(req,res)=>{
    console.log("server is listening on port no",PORT)
})