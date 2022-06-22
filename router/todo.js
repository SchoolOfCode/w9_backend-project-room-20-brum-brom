import express from "express";
const todoRouter = express.Router();

import { getTodo, postTodo, deleteTodo } from '../models/todoModels.js'



todoRouter.get("/", async function (req, res) {
    let result = await getTodo();
    return res.json({
      sucess: true,
      payload: result,
    });
  });

 
  todoRouter.post("/", async function (req, res) {
    const newTodo = req.body;
    console.log(newTodo);
    let result = await postTodo(newTodo);
    //   console.log(result);
    return res.json({
      sucess: true,
      payload: result,
    });
  });
  
  todoRouter.delete("/:id", async function (req, res) {
    const deleteID = req.params.id;
    const result = await deleteTodo(deleteID);
    res.json({
      success: true,
      payload: result,
    });
  });

  todoRouter.patch("/", async function (req, res) {
    if (req.query.id !== undefined){
      let id = req.body.id;
      let text = req.body.text;
      let complete = req.body.complete
      let result = await patchAllTodo(id,text,complete);
      return res.json({ sucess: true, payload: result });
    }
  });







export default todoRouter