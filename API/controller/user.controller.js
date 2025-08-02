import rs from 'randomstring'
import jwt from 'jsonwebtoken';
import UserSchemaModel from "../models/user.models.js";
import "../models/connection.js";;

export const save=async(request,response)=>{
    const users=await UserSchemaModel.find();
    const len =users.length;
    const _id=len==0?1:users [len-1]._id+1;

    const userDetails={...request.body,_id:_id,status:0,role:"user",info:Date()};

    
    try{
        await UserSchemaModel.create(userDetails);
         response.status(201).json("status",true);
    }
    catch(error){
          response.status(500).json({status:false})  
          console.log(error)      
    }
}
