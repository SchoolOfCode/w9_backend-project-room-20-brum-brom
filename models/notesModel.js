import { query } from '../db/index.js'

export async function getNotes(){
    const res = await query(`SELECT * FROM notes;`);
    const notesArray = res.rows;
    res.json(notesArray)
    }


