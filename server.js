const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();

const routes=require('./routes/crudRoute')

const port=process.env.PORT
const db=process.env.MONGO_DB

const app=express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

//routes
app.use('/',routes)

//connecting to db
mongoose.connect(db).then(()=>{
    app.listen(port,()=>{
        console.log("connected");
    })  
})