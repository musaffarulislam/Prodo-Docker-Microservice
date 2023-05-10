import { Application, Request, Response } from 'express';
import { ProductController } from '../controllers/productController';

export class ProductRoutes {

    private product_controller: ProductController = new ProductController();

    public route(app: Application) {
        
        app.post('/api/product', (req: Request, res: Response) => {
            this.product_controller.create_product(req, res);
        });

        app.get('/api/product/:id', (req: Request, res: Response) => {
            this.product_controller.get_product(req, res);
        });

        app.delete('/api/product/:id', (req: Request, res: Response) => {
            this.product_controller.delete_product(req, res);
        });

    }
}