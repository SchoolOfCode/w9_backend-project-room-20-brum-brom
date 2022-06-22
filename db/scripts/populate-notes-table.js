import notesSampledata from "../../libs/notesSample.js";
import { query } from "../../db/index.js";

for (let i = 0; i < notesSampledata.length; i++) {
  await query(
    "INSERT INTO notes(week,day,post,emoji,reflections) VALUES ($1,$2,$3, $4, $5)",
    [
      notesSampledata[i].week,
      notesSampledata[i].day,
      notesSampledata[i].post,
      notesSampledata[i].emoji,
      notesSampledata[i].reflections,
    ]
  );
  console.log(`${notesSampledata[i]} added`);
}
