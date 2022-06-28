import { query } from "../../index.js";

const createEmotionsString = `CREATE TABLE IF NOT EXISTS todo (id INT, 
    text TEXT, complete BOOL);`;

await query(createEmotionsString);
