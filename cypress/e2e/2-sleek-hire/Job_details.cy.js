///<reference types="Cypress" />

describe("Sleek Hire UI", () => {
  before(() => {
    cy.visit("https://xtrahrs.web.app/");
  });
  it("View Port", () => {
    // cy.viewport(viewport);
    cy.get(
      ":nth-child(2) > :nth-child(2) > :nth-child(1) > .flex-column"
    ).click();
    cy.wait(5000);
    cy.get('[type="email"]').type("jhon@gmail.com").click()
    cy.get('[type="password"]').type(1234567).click()
    cy.get('[type="submit"]').should('contain', "Login").click()
    cy.wait(5000)
    cy.viewport(550, 750)
    cy.wait(4000)
    cy.viewport(320, 500)
    cy.wait(4000)
    cy.viewport(375, 500)
    cy.wait(4000)
    cy.viewport(425, 500)
    cy.wait(4000)
    cy.viewport(768, 500)
    cy.wait(4000)
    cy.viewport(1024, 668)
    cy.wait(4000)
    cy.viewport(1440, 835)
    cy.wait(4000)
  });

  //   Cypress._.each(
  //     ["iphone-6", "iphone-5", "iphone-3", "iphone-4", "iphone-6+"],
  //     (viewport) => {
  //       it(`Viewport ${viewport}`, () => {
  //         cy.viewport(viewport);
  //         cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .flex-column').click()
  //         cy.wait(5000)
  //       });
  //     }
  //   );
});
