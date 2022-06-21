import express from "express";
import { getNotes } from '../models'

const notesRouter = express.Router()

notesRouter.get('/', getNotes)


export default notesRouter