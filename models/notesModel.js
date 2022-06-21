import { query } from "../db/index.js";

export async function getNotes() {
  const res = await query(`SELECT * FROM notes;`);
  const notesArray = res.rows;
  return notesArray;
}

export async function postNotes(newPost) {
  const res = await query(
    `INSERT INTO notes(week,day,post) VALUES ($1,$2,$3)`,
    [newPost.week, newPost.day, newPost.post]
  );
  console.log(res);
  //   const newPost = res.rows;
  return newPost;
}
