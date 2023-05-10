"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const environment_1 = require("../environment");
const test_routes_1 = require("../routes/test_routes");
const common_routes_1 = require("../routes/common_routes");
const product_routes_1 = require("../routes/product_routes");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://127.0.0.1/' + environment_1.default.getDBName();
        this.test_routes = new test_routes_1.TestRoutes();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.product_routes = new product_routes_1.ProductRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.test_routes.route(this.app);
        this.product_routes.route(this.app);
        this.common_routes.route(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
            console.log("MongoDB connected");
    }
}
exports.default = new App().app;
