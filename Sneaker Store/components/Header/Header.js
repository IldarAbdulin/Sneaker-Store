class Header {

    handlerOpenShoppingPage() {
        shoppingPage.render()
    }

    render(count) {
        const html = `
            <div class="header">
                <div class="header-container">
                    <div class="header-logo">
                        <img src="img/Logo/sneakerLogo.svg" />
                        <span> Sneakers shop </span>
                    </div>
                    <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                        <i class='bx bx-cart'></i>${count}
                    </div>
                </div>
            </div>
        `
        RootHeader.innerHTML = html;
    }
}

const headerPage = new Header();