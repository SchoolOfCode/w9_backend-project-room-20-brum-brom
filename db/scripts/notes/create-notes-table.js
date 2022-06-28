import { query } from "../../index.js";

const createTableString = `CREATE TABLE IF NOT EXISTS notes (notes_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
                week TEXT, day TEXT, post TEXT, emoji TEXT, reflections TEXT );`;

await query(createTableString);
