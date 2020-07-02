describe('AnimalPreviewComponent', () => {
  beforeEach(() => cy.visit('/iframe.html?id=animalpreviewcomponent--main'));
  it('should match image snapshot', () => cy.matchImageSnapshot());
});
