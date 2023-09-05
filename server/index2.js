const express = require("express")
const dummydata = require("./dummydata")
const cors = require("cors")
const arr = []
const app = express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/AboutUs",(req,res)=>{
    res.send("hello")
})
app.get("/Fetchapi",(req,res)=>{
    res.send(dummydata)
})

app.post("/login",(req,res)=>{
    const data = req.body
    arr.push(data)
    res.send(arr)
})

app.listen(5000,()=>{
    console.log("fine")
})