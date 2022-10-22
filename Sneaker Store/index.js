function render() {
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);

    productsPage.render(); 
}
spinnerPage.render()

let Catalog = []
//http://myjson.dit.upm.es/api/bins/bcqs
//server/catalog.json
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        Catalog = body;
        setTimeout(() => {
            spinnerPage.handleClear()
            render()
        }, 1000)
    })
    .catch(error => {
        spinnerPage.handleClear()
        errorPage.render()
    });