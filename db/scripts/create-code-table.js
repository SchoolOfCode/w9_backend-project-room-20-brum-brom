import { query } from "../../db/index.js";

const createTableString = `CREATE TABLE IF NOT EXISTS codeSnippets (code_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
                title TEXT, description TEXT, html TEXT, css TEXT, javascript TEXT );`;

await query(createTableString);