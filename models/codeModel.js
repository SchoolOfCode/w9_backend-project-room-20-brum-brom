import { query } from "../db/index.js";


export async function getCode() {
    const res = await query(`SELECT * FROM codeSnippets;`);
    const codeArray = res.rows;
    return codeArray;
  }