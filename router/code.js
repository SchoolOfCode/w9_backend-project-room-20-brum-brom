import { Express} from "express";
import { getCode } from "../models/codeModel";

const codeRouter= express.Router()

codeRouter.get('/', async function(res, req){

    let result = await getCode();
    return res.json({
      sucess: true,
      payload: result,
    });

})



export default  codeRouter 