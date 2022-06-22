import pg from "pg";

const connectionString = process.env.PGURL;

const pool = new pg.Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}

//console.log(await query("SELECT NOW()"));
