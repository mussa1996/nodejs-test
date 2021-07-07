import {task} from "../../models"

  exports.create=(req,res)=>{
        return task.create({
            title:req.body.title,
            description:req.body.description
        })
        .then(task=>res.status(201).send({message:'created success'}))
        .catch(error=>res.status(400).send((error)))
    
}
exports.list=(req,res)=>{
    return task.findAll()
    .then(task=>res.status(201).send(task))
    .catch(error=>res.status(400).send((error)))
}
