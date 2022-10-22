class Spinner {
    handleClear() {
        RootSpinner.innerHTML = '';
    }
    render() {
        const html = `
            <div class="spinner-container">
                <img class="spinner__img" src="components/Spinner/img/spinner.svg" />
            </div>
       `
       RootSpinner.innerHTML = html;
    }
}
const spinnerPage = new Spinner();
