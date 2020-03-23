class ProductList {
  constructor(cart) {
    this.cart = cart;
    this.container = document.querySelector('.products-container');
    this.productService = new ProductsService();
    this.productService
      .getProducts()
      .then(() => this.renderProducts())
      .then(() => this.addEventListeners());
  }
  async renderProducts() {
    let productListDomString = '';
    const products = await this.productService.getProducts();
    products.forEach(product => {
      productListDomString += `<div class="${product.brand}">
                  <div class="card product">
                    <img class="card-img-top" src="img/${product.image}" 
                        alt="${product.title}">
                    <div class="card-body d-flex flex-column">
                      <h4 class="card-title">${product.title}</h4>                    
                      <div class="d-flex justify-content-around">
                        <button class="btn btn-info" data-toggle="modal"
                          data-target="#productInfoModal" data-id="${product.id}" lang="en">Info
                        </button>
                        <button class="btn btn-primary buy" data-id="${product.id}" lang="en">
                          ₴${product.price/2}  ₴<s>${product.price}</s> Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>`;
    });
    this.container.innerHTML = productListDomString;
  }
  addEventListeners() {
    document
      .querySelectorAll('.product .btn-info')
      .forEach(button =>
        button.addEventListener('click', event =>
          this.handleProductInfoClick(event)
        )
      );
    document
      .querySelectorAll(
        '.card.product button.buy, #productInfoModal button.buy'
      )
      .forEach(button =>
        button.addEventListener('click', event =>
          this.handleProductBuyClick(event)
        )
      );
    document.getElementById('sort-by-price-increase').addEventListener('click', () => this.sortByPriceIncrease());
    document.getElementById('sort-by-price-decrease').addEventListener('click', () => this.sortByPriceDecrease());
    document.getElementById('sort-by-popularity').addEventListener('click', () => this.sortByPopularity());
    document.getElementById('sort-by-name-increase').addEventListener('click', () => this.sortByNameIncrease());
    document.getElementById('sort-by-name-decrease').addEventListener('click', () => this.sortByNameDecrease());
    document.getElementById('Apple').addEventListener('click', () => this.sortByBrandApple());
    document.getElementById('Samsung').addEventListener('click', () => this.sortByBrandSamsung());
    document.getElementById('Xiaomi').addEventListener('click', () => this.sortByBrandXiaomi());
    document.getElementById('Realme').addEventListener('click', () => this.sortByBrandRealme());
    document.getElementById('Huawei').addEventListener('click', () => this.sortByBrandHuawei());
    document.getElementById('Meizu').addEventListener('click', () => this.sortByBrandMeizu());
    document.getElementById('all-brands').addEventListener('click', () => this.sortByBrandAll());
  }
  async handleProductInfoClick(event) {
    const button = event.target; // Button that triggered the modal
    const id = button.dataset.id; // Extract info from data-* attributes
    const product = await this.productService.getProductById(id);
    const modal = document.querySelector('#productInfoModal');
    const productImg = modal.querySelector('.modal-body .card-img-top');
    productImg.setAttribute('src', 'img/' + product.image);
    productImg.setAttribute('alt', product.title);
    modal.querySelector('.modal-body .card-title').innerText = product.title;
    modal.querySelector('.modal-body .card-text').innerText =
      product.description;
    const btnBuy = modal.querySelector('button.buy');
    btnBuy.innerText = `‎₴${product.price} - Buy`;
    btnBuy.dataset.id = id;
  }
  handleProductBuyClick(event) {
    const button = event.target;
    const id = button.dataset.id;
    this.cart.addProduct(id);
    window.showAlert('Додано до кошика');
  }
  async sortByPriceIncrease() {
    this.productService = new ProductsService();
    const products = await this.productService.getProducts();
    products.sort((a, b) => a.price - b.price);
    this.renderProducts();
    this.addEventListeners();
  }

  async sortByPriceDecrease() {
    this.productService = new ProductsService();
    const products = await this.productService.getProducts();
    products.sort((a, b) => b.price - a.price);
    this.renderProducts();
    this.addEventListeners();
  }

  async sortByPopularity() {
    this.productService = new ProductsService();
    const products = await this.productService.getProducts();
    products.sort((a, b) => a.popularity - b.popularity);
    this.renderProducts();
    this.addEventListeners();
  }

  async sortByNameIncrease() {
    this.productService = new ProductsService();
    const products = await this.productService.getProducts();
    products.sort((a, b) => a.name - b.name);
    this.renderProducts();
    this.addEventListeners();
  }

  async sortByNameDecrease() {
    this.productService = new ProductsService();
    const products = await this.productService.getProducts();
    products.sort((a, b) => b.name - a.name);
    this.renderProducts();
    this.addEventListeners();
  }
  sortByBrandApple() {
    let apple = document.getElementsByClassName('Apple');
    let samsung = document.getElementsByClassName('Samsung');
    let xiaomi = document.getElementsByClassName('Xiaomi');
    let oneplus = document.getElementsByClassName('OnePlus');
    let huawei = document.getElementsByClassName('Huawei');
    let realme = document.getElementsByClassName('Realme');
    let meizu = document.getElementsByClassName('Meizu');
    this.styleDisplayNone(meizu);
    this.styleDisplayNone(samsung);
    this.styleDisplayNone(xiaomi);
    this.styleDisplayNone(oneplus);
    this.styleDisplayNone(huawei);
    this.styleDisplayNone(realme);
    this.styleDisplayBlock(apple);
  }
  sortByBrandSamsung() {
    let samsung = document.getElementsByClassName('Samsung');
    let apple = document.getElementsByClassName('Apple');
    let xiaomi = document.getElementsByClassName('Xiaomi');
    let oneplus = document.getElementsByClassName('OnePlus');
    let huawei = document.getElementsByClassName('Huawei');
    let realme = document.getElementsByClassName('Realme');
    let meizu = document.getElementsByClassName('Meizu');
    this.styleDisplayNone(meizu);
    this.styleDisplayNone(xiaomi);
    this.styleDisplayNone(oneplus);
    this.styleDisplayNone(huawei);
    this.styleDisplayNone(realme);
    this.styleDisplayNone(apple);
    this.styleDisplayBlock(samsung);
  }
  sortByBrandXiaomi() {
    let xiaomi = document.getElementsByClassName('Xiaomi');
    let apple = document.getElementsByClassName('Apple')
    let samsung = document.getElementsByClassName('Samsung');
    let oneplus = document.getElementsByClassName('OnePlus');
    let huawei = document.getElementsByClassName('Huawei');
    let realme = document.getElementsByClassName('Realme');
    let meizu = document.getElementsByClassName('Meizu');
    this.styleDisplayNone(meizu);
    this.styleDisplayNone(samsung);
    this.styleDisplayNone(oneplus);
    this.styleDisplayNone(huawei);
    this.styleDisplayNone(realme);
    this.styleDisplayNone(apple);
    this.styleDisplayBlock(xiaomi);
  }
  sortByBrandRealme() {
    let realme = document.getElementsByClassName('Realme');
    let apple = document.getElementsByClassName('Apple')
    let samsung = document.getElementsByClassName('Samsung');
    let xiaomi = document.getElementsByClassName('Xiaomi');
    let oneplus = document.getElementsByClassName('OnePlus');
    let huawei = document.getElementsByClassName('Huawei');
    let meizu = document.getElementsByClassName('Meizu');
    this.styleDisplayNone(meizu);
    this.styleDisplayNone(samsung);
    this.styleDisplayNone(xiaomi);
    this.styleDisplayNone(oneplus);
    this.styleDisplayNone(huawei);
    this.styleDisplayNone(apple);
    this.styleDisplayBlock(realme);
  }
  sortByBrandHuawei() {
    let apple = document.getElementsByClassName('Apple')
    let samsung = document.getElementsByClassName('Samsung');
    let xiaomi = document.getElementsByClassName('Xiaomi');
    let oneplus = document.getElementsByClassName('OnePlus');
    let realme = document.getElementsByClassName('Realme');
    let huawei = document.getElementsByClassName('Huawei');
    let meizu = document.getElementsByClassName('Meizu');
    this.styleDisplayNone(meizu);
    this.styleDisplayNone(samsung);
    this.styleDisplayNone(xiaomi);
    this.styleDisplayNone(oneplus);
    this.styleDisplayNone(realme);
    this.styleDisplayNone(apple);
    this.styleDisplayBlock(huawei);
  }
  sortByBrandMeizu() {
    let apple = document.getElementsByClassName('Apple')
    let samsung = document.getElementsByClassName('Samsung');
    let xiaomi = document.getElementsByClassName('Xiaomi');
    let oneplus = document.getElementsByClassName('OnePlus');
    let realme = document.getElementsByClassName('Realme');
    let huawei = document.getElementsByClassName('Huawei');
    let meizu = document.getElementsByClassName('Meizu');
    this.styleDisplayBlock(meizu);
    this.styleDisplayNone(samsung);
    this.styleDisplayNone(xiaomi);
    this.styleDisplayNone(oneplus);
    this.styleDisplayNone(realme);
    this.styleDisplayNone(apple);
    this.styleDisplayNone(huawei);
  }
  sortByBrandAll() {
    let apple = document.getElementsByClassName('Apple')
    let samsung = document.getElementsByClassName('Samsung');
    let xiaomi = document.getElementsByClassName('Xiaomi');
    let oneplus = document.getElementsByClassName('OnePlus');
    let realme = document.getElementsByClassName('Realme');
    let huawei = document.getElementsByClassName('Huawei');
    let meizu = document.getElementsByClassName('Meizu');
    this.styleDisplayBlock(meizu);
    this.styleDisplayBlock(samsung);
    this.styleDisplayBlock(xiaomi);
    this.styleDisplayBlock(oneplus);
    this.styleDisplayBlock(realme);
    this.styleDisplayBlock(apple);
    this.styleDisplayBlock(huawei);
  }

  styleDisplayNone(element) {
    for (let i = 0; i < element.length; i++){
      element[i].style.display = 'none';
    }
  }
  styleDisplayBlock(element) {
    for (let i = 0; i < element.length; i++){
      element[i].style.display = 'block';
    }
  }
}