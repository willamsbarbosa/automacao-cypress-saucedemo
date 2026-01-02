describe('Testar via API', () => {
    it('Validar Status', () => {
        cy.request("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.userId).to.eq(1);
        });

    });    
    it('Validar Status de Erro', () => {
        cy.request({url:"https://jsonplaceholder.typicode.com/posts/0", failOnStatusCode: false}).then((response) => {
            expect(response.status).to.eq(404);
        });

    });   
});