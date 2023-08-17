const mongoose=require('mongoose')

//data schema
const data=new mongoose.Schema({
    val:{
        type:String
    }
})

//data model
const value=mongoose.model('value',data);

module.exports=value;
