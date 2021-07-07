import express from "express"
const route=express.Router();
import task from "./task";


route.use('/task',task);
 
module.exports=route;