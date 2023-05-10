import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import environment from "../environment";
import { TestRoutes } from "../routes/test_routes";
import { CommonRoutes } from "../routes/common_routes";
import { ProductRoutes } from "../routes/product_routes";

class App {

    public app: express.Application;
    public mongoUrl: string = 'mongodb://127.0.0.1:27017/' + environment.getDBName();

    private test_routes: TestRoutes = new TestRoutes();
    private common_routes: CommonRoutes = new CommonRoutes();
    private product_routes: ProductRoutes = new ProductRoutes();

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

    private mongoSetup(): void{
        mongoose.connect(this.mongoUrl,
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true,
            } as mongoose.MongooseOptions),
            console.log("MongoDB connected");
    }
}

export default new App().app;