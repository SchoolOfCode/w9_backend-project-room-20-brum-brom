import { query } from "../index.js";

const createEmotionsString = `CREATE TABLE IF NOT EXISTS emotions (emotions_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    post_id INT references notes (notes_id), emoji TEXT,  reflections TEXT );`;

await query(createEmotionsString);

