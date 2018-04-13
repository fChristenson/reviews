describe("My spec", () => {
  it("should visit google.com", () => {
    cy.visit("http://google.com");
    cy.title().should("include", "Google");
  });

  context("Search", () => {
    it("should search for cats", () => {
      cy.visit("http://google.com");
      const input = cy.get("#lst-ib").type("cat{enter}");
      cy.title().should("include", "cat");
    });
  });
});
