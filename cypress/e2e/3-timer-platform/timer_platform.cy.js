describe("template spec", () => {
  it("Invalid Credentials Timer Platform", () => {
    cy.visit("https://timer-platform.web.app");
    cy.get('input[type="email"]').type("example@example.com");
    cy.get('input[type="password"]').type("admin@gmail.com");
    cy.get(".my-4").contains("Sign in").click();
    cy.contains(
      "There is no user record corresponding to this identifier. The user may have been deleted."
    ).should("be.visible");
  });

  it("Valid CredentialsTimer Platform", () => {
    cy.visit("https://timer-platform.web.app");
    cy.get('input[type="email"]').type("demo@gmail.com");
    cy.get('input[type="password"]').type("1234567");
    cy.get(".my-4").contains("Sign in").click();
  });
});
