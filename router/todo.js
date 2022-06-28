import express from "express";
const todoRouter = express.Router();

import {
  getTodo,
  postTodo,
  deleteTodo,
  putAllTodo,
} from "../models/todoModels.js";

todoRouter.get("/", async function (req, res) {
  let result = await getTodo();
  return res.json({
    success: true,
    payload: result,
  });
});

todoRouter.post("/", async function (req, res) {
  const newTodo = req.body;

  let result = await postTodo(newTodo);
  //   console.log(result);
  return res.json({
    success: true,
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
  if (req.query.id !== undefined) {
    const patchBody = req.body;
    let result = await patchAllTodo(patchBody);
    return res.json({ success: true, payload: result });
  }
});

todoRouter.put("/:id", async function (req, res) {
  const replaceTodos = req.body;
  const replaceID = req.params.id;
  const result = await putAllTodo(replaceID, replaceTodos);
  res.json({
    success: true,
    payload: result,
  });
});

export default todoRouter;
