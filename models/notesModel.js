import { query } from "../db/index.js";


//refactor patch to handle qeury



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

export async function postNotes(newPost) {
  const res = await query(
    `INSERT INTO notes(week,day,post) VALUES ($1,$2,$3)`,
    [newPost.week, newPost.day, newPost.post]
  );
  console.log(res);
  //   const newPost = res.rows;
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

export async function replaceNotesByID(replaceID, replaceNotes) {
  const res = await query(
    `UPDATE notes SET week = $2, day = $3, post = $4 WHERE notes_id = $1 RETURNING *;`,
    [replaceID, replaceNotes.week, replaceNotes.day, replaceNotes.post]
  );
  const replacednotes = res.rows;
  return replacednotes;
}

export async function patchNoteByID(replaceID, patchNotes) {
  let patchedNotes;
  if (patchNotes.day !== undefined) {
    const res = await query(
      `UPDATE notes SET day = $2 WHERE notes_id = $1 RETURNING *;`,
      [replaceID, patchNotes.day]
    );
    patchedNotes = res.rows;
  }
  if (patchNotes.week !== undefined) {
    const res = await query(
      `UPDATE notes SET week = $2 WHERE notes_id = $1 RETURNING *;`,
      [replaceID, patchNotes.week]
    );
    patchedNotes = res.rows;
  }
  if (patchNotes.post !== undefined) {
    const res = await query(
      `UPDATE notes SET post = $2 WHERE notes_id = $1 RETURNING *;`,
      [replaceID, patchNotes.post]
    );
    patchedNotes = res.rows;
  }
  return patchedNotes;
}
