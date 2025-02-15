class ProductsPage {
  getAllProducts(endpoint: string) {
    return cy.request("GET", `${endpoint}`);
  }

  getOneProduct(endpoint: string) {
    return cy.request("GET", `${endpoint}`);
  }

  addNewProduct(endpoint: string, requestBody: object) {
    return cy.request("POST", `${endpoint}`, requestBody);
  }

  updateExistingProduct(endpoint: string, requestBody: object) {
    return cy.request("PUT", `${endpoint}`, requestBody);
  }

  deleteProduct(endpoint: string) {
    return cy.request("DELETE", `${endpoint}`);
  }

  validateStatusCode(response: Cypress.Response<any>, expectedStatus: number) {
    expect(response.status).to.equal(expectedStatus);
  }

  validateProductById(response: Cypress.Response<any>, id: number) {
    expect(response.body).to.have.property("id", id);
  }

  validateProductList(response: Cypress.Response<any>) {
    expect(response.body).to.have.property("products");
    expect(response.body.products).to.be.an("array");
    expect(response.body.products.length).to.be.greaterThan(0);
  }

  validateAddedProduct(
    response: Cypress.Response<any>,
    expectedProduct: object
  ) {
    Object.keys(expectedProduct).forEach((key) => {
      expect(response.body).to.have.property(
        key,
        expectedProduct[key as keyof typeof expectedProduct]
      );
    });
  }

  validateUpdatedProduct(
    response: Cypress.Response<any>,
    expectedProduct: any
  ) {
    Object.keys(expectedProduct).forEach((key) => {
      expect(response.body).to.have.property(key, expectedProduct[key]);
    });
  }

  validateDeletedProduct(response: Cypress.Response<any>) {
    expect(response.body).to.have.property("isDeleted", true);
    const deletedOn = response.body.deletedOn;
    const deletedOnDate = new Date(deletedOn);
    const currentDate = new Date();
    expect(deletedOnDate.getDate()).to.be.eq(currentDate.getDate());
  }
}

export default new ProductsPage();
