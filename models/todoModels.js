import { query } from "../db/index.js";


export async function getTodo() {
    const res = await query(`SELECT * FROM todo;`);
    const todoArray = res.rows;
    return todoArray;
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

  export async function patchAllTodo(id,text,complete) {
   
    const res = await query(
      `UPDATE todo SET text = $2, complete=$3, WHERE id=$1 RETURNING *;`,
      [id,text,complete]
    );
    let patchedTodo = res.rows;
    return patchedTodo;
  }
  
  export async function putAllTodo(replaceID, replaceTodos){

    const res = await query(
      `UPDATE todo SET text = $2, complete=$3, WHERE id=$1 RETURNING *;`,
      [replaceID,replaceTodos.text,replaceTodos.complete]
    );
    let patchedTodo = res.rows;
    return patchedTodo

  }