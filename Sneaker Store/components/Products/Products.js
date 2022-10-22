class Product {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element , id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id)

        if(pushProduct) {
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemove
        } else {
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelAdd
        }
        headerPage.render(products.length)
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''

        Catalog.map(({id , name , img , price}) => {
            let activeClass = '';
            let activeText = '';

            if(productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog +=  `
                <li class="products-element">
                    <p class="products-element__name">${name}</p>
                    <div class="sneaker-img"> 
                        <img class="products-element__img" src="${img}" />
                    </div>
                    <p class="products-element__price">
                        Цена: ${price} RUB
                    </p>
                    <button class="products-element__btn${activeClass}" onclick ="productsPage.handleSetLocationStorage(this , '${id}')" > 
                        ${activeText} 
                    </button>
                </li>
            `;
        });
        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;
        RootProducts.innerHTML = html
    }
}
const productsPage = new Product();