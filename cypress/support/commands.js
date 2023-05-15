// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- This is a parent command --
// Cypress.Commands.add("Timer Sharer Platform", () => {
//   cy.request({
//     method: "POST",
//     url: "https://timer-platform.web.app/auth/login",
//     body: {
//       username: "admin@gmail.com",
//       password: "1234567",
//     },
//   }).then((response) => {
//     expect(response.status).to.eq(200);
//     Cypress.Cookies.preserveOne("");
//   });
// });

Cypress.Commands.add("login", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("https://timer-platform.web.app/auth/login");
    cy.get('input[type="email"]').type(username);
    cy.get("input[type=password]").type(password);
    cy.get(".my-4").contains("Sign in").click();
    // cy.wait(10000);
    // cy.contains(
    //   "There is no user record corresponding to this identifier. The user may have been deleted."
    // ).should("be.visible");
  });
});
