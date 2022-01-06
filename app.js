if( process.env.NODE_env !== "production"){
    require("dotenv").config({path: ".env"})
}

const StripeSecretKey = process.env.STRIPE_SECRET_KEY
const StripePublicKey = process.env.STRIPE_PUBLIC_KEY

const express = require("express")
const fs = require("fs") 
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.listen(5000, () => console.log("Everything is good!"))

app.get("/store", (req, res) =>{
    fs.readFile("data.json", (e, data) => { 
        if(e){
            res.status(500).end()
        }
        else{
            res.render("store.ejs", {data: JSON.parse(data)})
        }
    })
})