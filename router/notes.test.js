/* import request from "supertest";
import { app } from "../app.js";

test("Runs required tests on GET request at /notes path", async () => {
    const response = await request(app).get("/notes");

    expect(response.status).toBe(200);

    const expectedResponseBody = {
        success: true,
        payload: expect.any(Object)
    }
    expect(response.body).toStrictEqual(expectedResponseBody);

 /*    const expectedPayload = expect.arrayContaining([{
        events_id: expect.any(Number),
        type: expect.any(String),
        author: expect.any(String),
        description: expect.any(String),
        date: expect.any(String),
        start_time: expect.any(String),
        end_time: expect.any(String),
        social_link: expect.any(String),
        location: expect.any(String),
        attendance: expect.any(Number),
        status: expect.any(Boolean),
    }]);
    expect(response.body.payload).toStrictEqual(expectedPayload); */
})
 */