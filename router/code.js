import express from "express";
import { getCode, getCodeByID  } from "../models/codeModel.js";

const codeRouter = express.Router();

codeRouter.get("/", async function (req, res) {
  let result = await getCode();
  return res.json({
    sucess: true,
    payload: result,
  });
});


codeRouter.get("/:id", async function (req, res) {
  const getID = req.params.id;
  const result = await getCodeByID(getID);
  res.json({
    success: true,
    payload: result,
  });
});





export default codeRouter;
