import { query } from "../db/index.js";

//refactor patch to handle qeury
//Additional testing required for PostNotes function and response object

export async function getNotes() {
  const res = await query(`SELECT * FROM notes;`);
  const notesArray = res.rows;
  return notesArray;
}

export async function searchNotes(day, week) {
  const res = await query(`SELECT * FROM notes WHERE day = $1 AND week =$2;`, [
    day,
    week,
  ]);
  const searchedNotes = res.rows;
  return searchedNotes;
}

//This does not reflect updated table (missing emoji & reflections columns)
export async function postNotes({ week, day, post }) {
  const res = await query(
    `INSERT INTO notes(week,day,post) VALUES ($1,$2,$3) RETURNING *;`,
    [week, day, post]
  );
  return newPost;
}

export async function deleteNotesByID(deleteID) {
  const res = await query(
    `DELETE FROM notes WHERE notes_id = $1 RETURNING *;`,
    [deleteID]
  );
  const deletednotes = res.rows;
  return deletednotes;
}

export async function replaceNotesByID(replaceID, { week, day, post }) {
  const res = await query(
    `UPDATE notes SET week = $2, day = $3, post = $4 WHERE notes_id = $1 RETURNING *;`,
    [replaceID, week, day, post]
  );
  const replacednotes = res.rows;
  return replacednotes;
}

export async function patchNoteByID(replaceID, { day, week, post }) {
  let patchedNotes;
  if (day !== undefined) {
    const res = await query(
      `UPDATE notes SET day = $2 WHERE notes_id = $1 RETURNING *;`,
      [replaceID, day]
    );
    patchedNotes = res.rows;
  }
  if (week !== undefined) {
    const res = await query(
      `UPDATE notes SET week = $2 WHERE notes_id = $1 RETURNING *;`,
      [replaceID, week]
    );
    patchedNotes = res.rows;
  }
  if (post !== undefined) {
    const res = await query(
      `UPDATE notes SET post = $2 WHERE notes_id = $1 RETURNING *;`,
      [replaceID, post]
    );
    patchedNotes = res.rows;
  }
  return patchedNotes;
}

export async function patchAllNotes(day, week, post, emoji, reflections) {
  const res = await query(
    `UPDATE notes SET post = $1, emoji=$2, reflections=$3 WHERE day=$4 AND week=$5 RETURNING *;`,
    [post, emoji, reflections, day, week]
  );
  let patchedNotes = res.rows;
  return patchedNotes;
}
