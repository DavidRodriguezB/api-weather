// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../app");

describe("PUT /city/byname ", () => {
  test("It should add Zaragoza", async () => {
    const response = await request(app).get("/put/city/new?name=Zaragoza&longitude=-0.887712&latitude=41.649693");
    expect(response.body.code).toBe(200);
    expect(response.body.message).toEqual("OK ");
  });
});

describe("GET /city/byname ", () => {
  test("It should respond with Zaragoza", async () => {
    const response = await request(app).get("/get/city/byname?name=Zaragoza");
    expect(response.body.name).toEqual("Zaragoza");
  });
});

describe("DELETE /city/byname ", () => {
  test("It should delete Zaragoza", async () => {
    const response = await request(app).get("/delete/city/byname?name=Zaragoza");
    expect(response.body.code).toBe(200);
    expect(response.body.message).toEqual("City deleted");
  });
});