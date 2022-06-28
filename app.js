import express from "express";
import notesRouter from "./router/notes.js";
import todoRouter from "./router/todo.js";
import codeRouter from "./router/code.js";
import cors from "cors";




const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/notes", notesRouter);
app.use("/todo", todoRouter)
app.use("/code", codeRouter)

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});

export default app