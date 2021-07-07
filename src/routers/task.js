import express from "express"
const route=express.Router();
import taskController from "../controllers/task.controler/task.controller"

route.post('/add',taskController.create);
route.get('/list',taskController.list);

module.exports=route;