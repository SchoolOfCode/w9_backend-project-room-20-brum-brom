import request from "supertest";
import app from "./app.js";
import { test, expect, jest, afterAll } from "@jest/globals";
import { pool } from "./db/index.js";

afterAll(async function () {
  await pool.end();
});

describe("Test Notes Routes Functionality", () => {
  test("Test for existance of notes routes in app", async function () {
    const response = await request(app).get("/notes");

    expect(response.statusCode).toBe(200);
  });

  test("Test that the notes response header is a json", async function () {
    const response = await request(app).get("/notes");

    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Test that the notes body is as expected", async function () {
    const response = await request(app).get("/notes");
    const expectedResponseBody = {
      success: true,
      payload: expect.any(Array),
    };
    expect(response.body).toStrictEqual(expectedResponseBody);
  });

  test("Test that the note body value types are as expected", async function () {
    const response = await request(app).get("/notes");
    const expectedResponseBody = {
      success: true,
      payload: expect.any(Array),
    };

    // Reference from create-notes-table: (notes_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    //                week TEXT, day TEXT, post TEXT, emoji TEXT, reflections TEXT );

    const expectedPayload = expect.arrayContaining([
      {
        notes_id: expect.any(Number),
        week: expect.any(String),
        day: expect.any(String),
        post: expect.any(String),
        emoji: expect.any(String),
        reflections: expect.any(String),
      },
    ]);
    expect(response.body.payload).toStrictEqual(expectedPayload);
  });
});
