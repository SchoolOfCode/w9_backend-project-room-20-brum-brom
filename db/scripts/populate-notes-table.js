import notesSampledata from "../../libs/notesSample.js";
import { query } from "../../db/index.js";

for (let i = 0; i < notesSampledata.length; i++) {
  await query("INSERT INTO notes(week,day,post) VALUES ($1,$2,$3)", [
    notesSampledata[i].week,
    notesSampledata[i].day,
    notesSampledata[i].post,
  ]);
  console.log(`${notesSampledata[i]} added`);
}
