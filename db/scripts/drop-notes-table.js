import { query } from "../index.js";


const sqlString = `DROP TABLE IF EXISTS notes;`;
await query(sqlString);