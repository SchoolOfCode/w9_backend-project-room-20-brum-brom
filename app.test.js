import request from "supertest";
import  app from "./app.js"
import { test, expect } from '@jest/globals'

test("Test for notes routes in app", async function (){

const response = await request(app).get('/notes')
expect(response.statusCode).toBe(200)

console.log(response.headers)
})

