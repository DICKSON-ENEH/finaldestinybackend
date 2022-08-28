const express = require("express")
const port = 2222
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const url = "mongodb://localhost/destinyFoods"

mongoose.connect(url).then(()=>{
    app.listen(port, ()=>{
        console.log("connected to database/server", port)
    })
}).catch((err)=>{
    console.log(err)
})



app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.get("/" ,(req, res)=>{
    res.status(200).json({ 
        message:"destiny food getting set"
    })
})

app.use("/api/admin/v1", require("./controller/Router/router"))