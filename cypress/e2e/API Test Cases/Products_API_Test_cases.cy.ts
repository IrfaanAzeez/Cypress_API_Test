import productlist_page from "../../support/Pages/productlist_page";

describe("Products_API_Test_Cases", () => {
  let testData: any;

  beforeEach(function () {
    cy.fixture("testData").then((data) => {
      testData = data;
    });
  });

  it("Fetch All Products", () => {
    productlist_page.getAllProducts("/products").then((response) => {
      productlist_page.validateStatusCode(response, 200);
      productlist_page.validateProductList(response);
    });
  });

  it("Fetch Single Product by ID", () => {
    let id = 1;
    productlist_page.getOneProduct(`products/${id}`).then((response) => {
      productlist_page.validateStatusCode(response, 200);
      productlist_page.validateProductById(response, id);
    });
  });

  it("Add a New Product", () => {
    productlist_page
      .addNewProduct("products/add", testData.newProduct)
      .then((response) => {
        expect(response.status).to.eq(201);
        productlist_page.validateAddedProduct(response, testData.newProduct);
      });
  });

  it("Update an exixting Product", () => {
    let id = 2;
    productlist_page
      .updateExistingProduct(`products/${id}`, testData.updateProduct)
      .then((response) => {
        expect(response.status).to.eq(200);
        productlist_page.validateAddedProduct(response, testData.updateProduct);
      });
  });

  it("Delete an Product from List", () => {
    let id = 3;
    let date = new Date();
    productlist_page.deleteProduct(`products/${id}`).then((response) => {
      productlist_page.validateProductById(response, id);
      productlist_page.validateDeletedProduct;
    });
  });
});
