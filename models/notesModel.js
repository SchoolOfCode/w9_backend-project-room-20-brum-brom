import { query } from "../db/index.js";

export async function getNotes() {
  const res = await query(`SELECT * FROM notes;`);
  const notesArray = res.rows;
  return notesArray;
}

export async function postNotes(body) {
  const res = await query(
    `INSERT INTO notes(week,day,post) VALUES ($1,$2,$3)`,
    [body.week, body.day, body.post]
  );
  console.log(res);
  const newPost = res.rows;
  return newPost;
}
