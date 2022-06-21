import express from "express";
import { getNotes, postNotes } from "../models/notesModel.js";

const notesRouter = express.Router();

notesRouter.get("/", async function (req, res) {
  let result = await getNotes();
  return res.json({
    sucess: true,
    payload: result,
  });
});

notesRouter.post("/", async function (req, res) {
  const body = req.body;
  let result = await postNotes(body);
  return res.json({
    sucess: true,
    payload: result,
  });
});

//post/delete/patch/put

export default notesRouter;
