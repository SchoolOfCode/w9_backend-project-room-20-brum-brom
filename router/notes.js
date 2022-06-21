import express from "express";
import { getNotes, postNotes, deleteNotesByID, replaceNotesByID, patchNoteByID } from "../models/notesModel.js";

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

notesRouter.delete('/:id', async function(req, res){
    const deleteID= req.params.id;
    const result = await deleteNotesByID(deleteID);
    res.json({
        success :true, 
        payload:result
    });
})

notesRouter.put('/:id', async function(req, res){
    const replaceNotes = req.body
    const replaceID= req.params.id;
    const result = await replaceNotesByID(replaceID, replaceNotes);
    res.json({
        success :true, 
        payload:result
    });
})

notesRouter.patch('/:id', async function(req, res){
    const patchNotes = req.body
    const replaceID= req.params.id;
    const result = await patchNoteByID(replaceID, patchNotes);
    res.json({
        success :true, 
        payload:result
    });
})




export default notesRouter;
