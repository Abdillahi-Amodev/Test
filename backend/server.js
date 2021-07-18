import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {router} from './routing/router.js'
import dotenv from 'dotenv'
const app =express()

dotenv.config()
const port =process.env.PORT || 5500

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

let url = process.env.MONGO_URI;

mongoose.connect(url,{ useCreateIndex:true, useFindAndModify:false, useNewUrlParser:true, useUnifiedTopology:true});

app.use('/api',router)

if (process.env.NODE_ENV==='production') {
    app.use(express.static('client/build'))
}

app.listen(port,()=>{
    console.log(`server is running ${port}`);
})