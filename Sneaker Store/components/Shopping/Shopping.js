class Shopping {

    handlerClear() {
        RootShopping.innerHTML = ''
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = '';
        let sumCatalog = 0;

        Catalog.map(({id , name , img , price}) => {
            if(productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <div class="shopping">
                        <p class="shopping-element__img"> <img class="shopping-img" src="${img}" /></p>
                        <p class="shopping-element__name">${name}</p>
                        <p class="shopping-element__price">Цена: ${price} RUB</p>
                    </div>
                `
                sumCatalog += price;
            }
        });

        const html = `  
            <div class="shopping-container">
                <div class="shopping-close" onclick="shoppingPage.handlerClear()"> </div>
                <div class="shopping-flex">
                    ${htmlCatalog}
                </div>
                <p class="sum-catalog">Сумма: ${sumCatalog} RUB</p>
            </div>
        `;
        RootShopping.innerHTML = html;
    }
}
const shoppingPage = new Shopping();
