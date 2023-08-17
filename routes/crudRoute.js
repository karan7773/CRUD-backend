const express=require('express')
const {createValue,getValues,getValue,deleteValue,updateValue}=require('../controllers/crudController')

const routes=express.Router();

//create and post a value
routes.post('/',createValue);

//get all values
routes.get('/',getValues);

//get one value
routes.get('/:id',getValue);

//delete the value 
routes.delete('/:id',deleteValue);

//updating a value
routes.patch('/:id',updateValue);

module.exports=routes