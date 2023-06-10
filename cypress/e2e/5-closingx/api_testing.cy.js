///<reference types="Cypress" />

describe("Products api", () => {
  // Get Request
  it("Closing-X Get", () => {
    cy.request(
      "GET",
      "https://us-central1-closing-x.cloudfunctions.net/getValues"
    )
      .its("status")
      .should("equal", 200);
  });

  // Post Request
  it("Closing-X Post", () => {
    cy.request({
      method: "POST",
      url: "https://us-central1-closing-x.cloudfunctions.net/getWinners",
      body: {
        winningTargetNumber: "13",
      },
    })
      .its("status")
      .should("equal", 200);
  });

  // Put Request
  it("Closing-X Put", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "This is home ",
      },
    })
      .its("status")
      .should("equal", 200);
  });

  //Delete Request
  it("Closing-X Delete", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
    // .its("status")
    // .should("equal", 200);
  });
});
