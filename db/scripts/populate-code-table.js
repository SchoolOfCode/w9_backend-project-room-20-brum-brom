
import { query } from "../../db/index.js";
import { codeData } from "../../libs/codeSample.js";

for (let i = 0; i < codeData.length; i++) {
  await query(
    "INSERT INTO codeSnippets( title, description, html, css, javascript) VALUES ($1,$2,$3,$4,$5)",
    [codeData[i].title, 
    codeData[i].description, 
    codeData[i].html, 
    codeData[i].css, 
    codeData[i].javascript]
  );
}
