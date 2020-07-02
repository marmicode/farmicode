describe('AnimalPreviewComponent', () => {
  beforeEach(() => cy.visit('/iframe.html?id=animalpreviewcomponent--main'));
  it('should', () => cy.matchImageSnapshot());
});
