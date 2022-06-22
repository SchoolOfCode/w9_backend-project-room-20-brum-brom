import { query } from "../db/index.js";


export async function getTodo() {
    const res = await query(`SELECT * FROM todo;`);
    const notesArray = res.rows;
    return notesArray;
  }

  export async function postTodo(newTodo) {
    const res = await query(
      `INSERT INTO todo (id,text,complete) VALUES ($1,$2,$3)`,
      [newTodo.id, newTodo.text, newTodo.complete]
    );
    console.log(res);
    const newPost = res.rows;
    return newPost;
  }

  export async function deleteTodo(deleteID) {
    const res = await query(
      `DELETE FROM todo WHERE id = $1 RETURNING *;`,
      [deleteID]
    );
    const deletedTodo= res.rows;
    return deletedTodo;
  }

