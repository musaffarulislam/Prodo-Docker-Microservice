"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/products/service");
class ProductController {
    constructor() {
        this.product_service = new service_2.default();
    }
    create_product(req, res) {
        if (req.body.name &&
            req.body.discription &&
            req.body.price) {
            const product_params = {
                name: req.body.name,
                discription: req.body.discription,
                price: req.body.price,
                modification_notes: [{
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: 'New user created'
                    }]
            };
            this.product_service.createProduct(product_params, (err, product_data) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)('create Product successfull', product_data, res);
                }
            });
        }
        else {
            // error response if some fields are missing in request body
            (0, service_1.insufficientParameters)(res);
        }
    }
    get_product(req, res) {
        if (req.params.id) {
            const product_filter = { _id: req.params.id };
            this.product_service.filterProduct(product_filter, (err, product_data) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)('get product successfull', product_data, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
    delete_product(req, res) {
        if (req.params.id) {
            this.product_service.deleteProduct(req.params.id, (err, delete_details) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else if (delete_details.deletedCount !== 0) {
                    (0, service_1.successResponse)('delete product successfull', null, res);
                }
                else {
                    (0, service_1.failureResponse)('invalid product', null, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
}
exports.ProductController = ProductController;
