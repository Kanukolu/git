const http=require('http')

//console.log(routes.someText)
const express=require("express")
const bodyParser=require("body-parser")
const app=express()
app.use(bodyParser.urlencoded({extended:false},{extends:false}))
// app.use("/",(req,res,next)=>{
//     console.log('middleware')
//     next()
//})

app.use("/add-product",(req,res,next)=>{
    console.log('in 2middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="add product"><input type="text"><button type="submit">add product</button></input></input></form>')
})
app.use("/product",(req,res,next)=>{
    console.log(req.body)
    res.redirect("/")
})
app.use("/",(req,res,next)=>{
    console.log('in')
    res.send('<h1>hello</h1>')
})

const server=http.createServer(app)

server.listen(3310)