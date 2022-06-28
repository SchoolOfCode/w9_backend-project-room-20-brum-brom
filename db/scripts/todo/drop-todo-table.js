import { query } from "../../index.js";

const sqlString = `DROP TABLE IF EXISTS todo;`;
await query(sqlString);
