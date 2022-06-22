import express from "express";
import {
  getNotes,
  postNotes,
  deleteNotesByID,
  replaceNotesByID,
  patchNoteByID,
  searchNotes,
  patchAllNotes,
} from "../models/notesModel.js";

// day two tasks - refactor patch and probably put from id to query- use router.get as the template for this

const notesRouter = express.Router();

notesRouter.get("/", async function (req, res) {
  if (req.query.day !== undefined && req.query.week !== undefined) {
    let day = req.query.day;
    let week = req.query.week;
    let result = await searchNotes(day, week);
    return res.json({ sucess: true, payload: result });
  }

  let result = await getNotes();
  return res.json({
    sucess: true,
    payload: result,
  });
});

notesRouter.patch("/", async function (req, res) {
  if (req.query.day !== undefined && req.query.week !== undefined) {
    let day = req.query.day;
    let week = req.query.week;
    let post = req.body.post;
    let emoji = req.body.emoji;
    let reflections = req.body.reflections;
    let result = await patchAllNotes(day, week, post, emoji, reflections);
    return res.json({ sucess: true, payload: result });
  }
});

//we want req.query.day and rq.query.week

/* notesRouter.get("/", async function(req,res){
    if(req.query.day!==undefined && req.query.week!==undefined){
        let day =req.query.day
        let week =req.query.week
        let result = await searchNotes(day, week)
        return res.json({ sucess: true,
            payload: result})
        }}) */

notesRouter.post("/", async function (req, res) {
  const newPost = req.body;
  console.log(newPost);
  let result = await postNotes(newPost);
  //   console.log(result);
  return res.json({
    sucess: true,
    payload: result,
  });
});

notesRouter.delete("/:id", async function (req, res) {
  const deleteID = req.params.id;
  const result = await deleteNotesByID(deleteID);
  res.json({
    success: true,
    payload: result,
  });
});

notesRouter.put("/:id", async function (req, res) {
  const replaceNotes = req.body;
  const replaceID = req.params.id;
  const result = await replaceNotesByID(replaceID, replaceNotes);
  res.json({
    success: true,
    payload: result,
  });
});

notesRouter.patch("/:id", async function (req, res) {
  const patchNotes = req.body;
  const replaceID = req.params.id;
  const result = await patchNoteByID(replaceID, patchNotes);
  res.json({
    success: true,
    payload: result,
  });
});

export default notesRouter;
