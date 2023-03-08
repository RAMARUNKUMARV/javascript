require('./mongoose/mongoose')//database connecting
const morgan=require('morgan')//api hits time
const express=require('express')//frame work
const dotenv=require('dotenv')
var app=express()

//routes
const blog = require('./routes/user')
dotenv.config()
//middleware
app.use(express.json())
app.use(morgan("common"))

app.use(express.urlencoded({extended:true}))//en coded body
const PORT=8000

app.use('/v1/',blog)//groups

app.listen(PORT,function(){console.log( PORT,'service Started ')})//server port running
