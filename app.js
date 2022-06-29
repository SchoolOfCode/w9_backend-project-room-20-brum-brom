import express from "express";
import notesRouter from "./router/notes.js";
import todoRouter from "./router/todo.js";
import codeRouter from "./router/code.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/notes", notesRouter);
app.use("/todo", todoRouter);
app.use("/code", codeRouter);

export default app;
