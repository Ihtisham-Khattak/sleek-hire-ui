/// <reference types="cypress" />

describe("Pinea Restaurant UI", () => {

    before(() => {
        cy.visit("https://pinea-restaurant-main.web.app/")
    })
    Cypress._.each(
      [
        "iphone-6",
        "iphone-5",
        "iphone-3",
        "iphone-4",
        "iphone-6+",
      ],
      (viewport) => {
        it(`Pinea Restaurant UI ${viewport}`, () => {
          cy.viewport(viewport);
          cy.visit("https://pinea-restaurant-main.web.app/payment");
          cy.get('.my-4 > .cursor-pointer').click()
            
          cy.window().then((win) => {
            // const height = 
            let currentPosition = 0;
            // Loop until the end of the window is reached
            while (currentPosition < win.innerHeight) {
              // Scroll down by a small amount
              cy.window().scrollTo(0, currentPosition);
              // Wait for a short delay to simulate a slow scroll
              cy.wait(100);
              // Increment the current position
              currentPosition += 10;
            }
          });
          cy.window().scrollTo(0,0);
        });
      }
    );
  });
  