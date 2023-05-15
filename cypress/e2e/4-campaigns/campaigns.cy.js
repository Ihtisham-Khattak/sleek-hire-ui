///<reference types="Cypress" />
describe("Vationaal Vakantieonderzoek Vialuxury Campaign", () => {
  before(() => {
    cy.visit("https://nationaalvakantieonderzoek-vialuxury.web.app/");
  });

  it("CTA Start deelname", () => {
    cy.get(".hero-contents__text-btn").contains("Start deelname").click();

    for (let i = 3; i <= 6; i++) {
      cy.get(`:nth-child(${i}) > .form-check > .form-check-input`).check();
      cy.wait(2*i++)
    }
    // cy.get(':nth-child(6) > .form-check > .form-check-input').check()
    // cy.get(':nth-child(6) > .form-check > .form-check-input').check()
    // cy.get(':nth-child(4) > .form-check > .form-check-input').check()
    // cy.get(':nth-child(6) > .form-check').contains('Alleen').click()
  });
});
