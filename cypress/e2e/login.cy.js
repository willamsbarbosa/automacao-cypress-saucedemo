describe('Começando a brincadeira', () => {
    beforeEach(() =>{
        cy.visit("https://www.saucedemo.com/");
    });
    it('Login no Saucedemo', () => {
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.get(".title").should("be.visible").and("have.text", "Products");
    });
    it('Login errado no Saucedemo', () => {
        cy.get("#user-name").type("xxxx");
        cy.get("#password").type("xxxx");
        cy.get("#login-button").click();
        cy.get("[data-test='error']").should("contain", "Username and password do not match") 
    });
});