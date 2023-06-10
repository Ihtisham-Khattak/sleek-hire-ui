// Hard-coding the data and expecting a response status of 200.
// Dynamic data expecting a response status of 200.

describe("Approaches - JSON Hard Code Object", () => {
  //Approach 01 Hard Code JSON Object
  it("Approach 01 : Json Post Api", () => {
    const requestedData = {
      userId: 1,
      id: 1,
      title: "Hello this is testing API",
      body: "Hi from payload side",
    };

    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: requestedData,
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.userId).to.eq(1);
      expect(response.body.id).to.eq(1);
      expect(response.body.title).to.eq("Hello tis is testing API");
      expect(response.body.body).to.eq("Hi from payload side");
    });
  });

  //Approach 02 Dynamic JSON Object
  it("Approach 02 : Dynamic Post Api", () => {
    const requestedData = {
      userId: 1,
      id: 1,
      title: Math.random().toString(32).substring(5),
      body: Math.random().toString(32).substring(5),
    };

    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: { requestedData },
    }).then((response) => {
        expect(response.status).to.eq(201),
        // data in response.body.userId === data comes in requested.useId
        expect(response.body.userId).to.eq(requestedData.userId),
        expect(response.body.id).to.eq(requestedData.id),
        expect(response.body.title).to.eq(requestedData.title),
        expect(response.body.body).to.eq(requestedData.body);
    });
  });
});
