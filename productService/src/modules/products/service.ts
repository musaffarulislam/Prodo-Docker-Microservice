import { IProduct } from './model';
import products from './schema';

export default class ProductService {

    public createProduct(product_params: IProduct, callback: any) {
        const _session = new products(product_params);
        _session.save(callback)
    }

    public filterProduct(query: any, callback: any){
        products.findOne(query, callback);
    }
   
    public updateProduct(product_params: IProduct, callback: any){
        const query = { _id: product_params._id };
        products.findOneAndUpdate(query, product_params, callback);
    }
 
    public deleteProduct(_id: String, callback: any){
        const query = { _id: _id };
        products.findOneAndUpdate(query, callback);
    }
}