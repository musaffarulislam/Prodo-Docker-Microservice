"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const productController_1 = require("../controllers/productController");
class ProductRoutes {
    constructor() {
        this.product_controller = new productController_1.ProductController();
    }
    route(app) {
        app.post('/api/product', (req, res) => {
            this.product_controller.create_product(req, res);
        });
        app.get('/api/product/:id', (req, res) => {
            this.product_controller.get_product(req, res);
        });
        app.delete('/api/product/:id', (req, res) => {
            this.product_controller.delete_product(req, res);
        });
    }
}
exports.ProductRoutes = ProductRoutes;
