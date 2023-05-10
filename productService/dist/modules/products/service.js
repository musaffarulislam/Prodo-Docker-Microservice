"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class ProductService {
    createProduct(product_params, callback) {
        const _session = new schema_1.default(product_params);
        _session.save(callback);
    }
    filterProduct(query, callback) {
        schema_1.default.findOne(query, callback);
    }
    updateProduct(product_params, callback) {
        const query = { _id: product_params._id };
        schema_1.default.findOneAndUpdate(query, product_params, callback);
    }
    deleteProduct(_id, callback) {
        const query = { _id: _id };
        schema_1.default.findOneAndUpdate(query, callback);
    }
}
exports.default = ProductService;
