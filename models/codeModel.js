import { query } from "../db/index.js";

export async function getCode() {
  const res = await query(`SELECT * FROM codeSnippets;`);
  const codeArray = res.rows;
  return codeArray;
}

// Passes in ****
export async function getCodeByID(getID) {
  const res = await query(`SELECT * FROM codeSnippets WHERE code_id=$1;`, [
    getID,
  ]);
  const getById = res.rows;
  return getById;
}
