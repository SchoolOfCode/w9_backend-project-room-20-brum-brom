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







export default todoRouter