describe('Cenários de Compra', () => {
    beforeEach(() =>{
        cy.visit("https://www.saucedemo.com/");
    });
    it('Comprando primeiro produto', () => {
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.get(".title").should("be.visible").and("have.text", "Products");
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get("[data-test='shopping-cart-badge']").click();
        cy.get("#checkout").click();
        cy.get("#first-name").type("Will");
        cy.get("#last-name").type("barbosa");
        cy.get("#postal-code").type("123456789")
        cy.get("#continue").click();
        cy.get("#finish").click();
        cy.get("[data-test='complete-header']").should("contain", "Thank you for your order!")
    });
});