import { query } from "../db/index.js";

/*
Below code is function in isolation but currently not being utilised by front end 
but will be used in future implementations */

export async function getTodo() {
  const res = await query(`SELECT * FROM todo;`);
  const todoArray = res.rows;
  return todoArray;
}

export async function postTodo({ id, text, complete }) {
  const res = await query(
    `INSERT INTO todo (id,text,complete) VALUES ($1,$2,$3)`,
    [id, text, complete]
  );

  const newPost = res.rows;
  return newPost;
}

export async function deleteTodo(deleteID) {
  const res = await query(`DELETE FROM todo WHERE id = $1 RETURNING *;`, [
    deleteID,
  ]);
  const deletedTodo = res.rows;
  return deletedTodo;
}

export async function patchAllTodo({ id, text, complete }) {
  const res = await query(
    `UPDATE todo SET text = $2, complete=$3, WHERE id=$1 RETURNING *;`,
    [id, text, complete]
  );
  let patchedTodo = res.rows;
  return patchedTodo;
}

export async function putAllTodo(replaceID, { text, complete }) {
  const res = await query(
    `UPDATE todo SET text = $2, complete=$3, WHERE id=$1 RETURNING *;`,
    [replaceID, text, complete]
  );
  let patchedTodo = res.rows;
  return patchedTodo;
}
