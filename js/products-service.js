class ProductsServise{
    constructor() {
        if (!ProductsServise._instance) ProductsServise._instance = this;
        return ProductsServise._instance;
    }
    async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('items.json'));
        }
        return this.products;
    }
    async getProductById(id) {
        const products = await this.getProducts();
        return products.find( product => product.id === id);
    }
}