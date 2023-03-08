const request = require("supertest");
const app = require("../main");

describe("v1/blog",()=>{
    it("POST/ create blog", async () => {
        const res = await request(app)
          .post("/api/admin/dealer/login")
          .send({
            username: "ranjithnatarajan",
            password: "12345678",
            roleType: "dealer",
          });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
        expect(res.body).toHaveProperty("data");
        
      });})