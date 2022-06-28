import emptyArray from "../../../libs/notesSample.js";
import { query } from "../../index.js";

for (let i = 0; i < emptyArray.length; i++) {
  await query(
    "INSERT INTO notes(week,day,post,emoji,reflections) VALUES ($1,$2,$3, $4, $5)",
    [
      emptyArray[i].weeks,
      emptyArray[i].days,
      emptyArray[i].post,
      emptyArray[i].emoji,
      emptyArray[i].reflections,
    ]
  );
}
