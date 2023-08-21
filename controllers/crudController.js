const value=require('../models/crudModals')

//post handler function
const createValue=(req,res)=>{
    const {val}=req.body
    console.log(val);
    try{
        const newval=new value({
            val
        });
        newval.save();
        res.json(newval);
    }catch(err){
        return res.send(err);
    }
}

//get all values handler function
const getValues=async (req,res)=>{
    try {
    const values=await value.find({});
    return res.json(values)
    } catch (error) {
        return console.log(error);
    }
}

//get single value functon
const getValue=async(req,res)=>{
    const {id}=req.params

    const val=await value.findById(id);
    res.json(val)
}

//delete handler function
const deleteValue=async(req,res)=>{
    const {id}=req.params

    value.findByIdAndDelete(id).then(()=>{
        res.send("deleted successfully")
        console.log("deleted successfully");
    }).catch((err)=>{
        console.log(err);
    })
}

//update handler function
const updateValue=async(req,res)=>{
    const {val}=req.body
    const {id}=req.params

    console.log(val);
    value.findByIdAndUpdate(id,{val}).then(()=>{
        res.send("updated successfully")
        console.log(`updated successfully,${val}`);
    }).catch((err)=>{
        console.log("err");
    })
}

module.exports={
    createValue,
    getValues,
    getValue,
    deleteValue,
    updateValue
}