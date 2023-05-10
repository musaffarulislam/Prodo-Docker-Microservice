import * as express from "express";
import * as bodyParser from "body-parser";
// import * as mongoose from 'mongoose';
// import environment from "../environment";
import connectDatabase from '../config/database'
import { TestRoutes } from "../routes/test_routes";
import { CommonRoutes } from "../routes/common_routes";
import { ProductRoutes } from "../routes/product_routes";

class App {

    public app: express.Application;
    // public mongoUrl: string = 'mongodb://127.0.0.1:27017/db_product_dev'

    private test_routes: TestRoutes = new TestRoutes();
    private product_routes: ProductRoutes = new ProductRoutes();
    private common_routes: CommonRoutes = new CommonRoutes();

    constructor(){
        this.app = express();
        this.config();
        this.mongoSetup();
        this.test_routes.route(this.app);
        this.product_routes.route(this.app);
        this.common_routes.route(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }
    
    private mongoSetup(): void{connectDatabase()}
}

export default new App().app;