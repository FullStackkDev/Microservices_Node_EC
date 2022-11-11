const request = require("supertest");
const app = require("./server");

describe("GET /", () => {
  it("GET / ", () => {
    const expected = { message: "NodeJS API is running" };
    return request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((resp) => {
        expect(resp.body).toEqual(expected);
      });
  });
});
