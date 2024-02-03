const express=require('express')
const app=express()

app.use('/',(req,res)=>{
    res.send("the server is running")
})
app.listen(5000,console.log("the server running on port 5000"))