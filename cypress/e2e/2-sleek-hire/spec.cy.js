///<reference types="Cypress" />

describe("Sleek Hire UI", () => {
  Cypress._.each(
    ["iphone-6", "iphone-5", "iphone-3", "iphone-4", "iphone-6+"],
    (viewport) => {
      it(`Viewport ${viewport}`, () => {
        cy.viewport(viewport)
        cy.visit("https://xtrahrs.web.app/")
      });
    }
  );
});
