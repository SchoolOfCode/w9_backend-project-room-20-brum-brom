import { query } from "../index.js";

const sqlString = `DROP TABLE IF EXISTS emotions;`;
await query(sqlString);