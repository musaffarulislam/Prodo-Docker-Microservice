import { IProduct } from './model';
import products from './schema';

export default class ProductService {

    public async createProduct(product_params: IProduct) {
        const _session = new products(product_params);
        await _session.save();
        return _session;
    }

    public filterProduct(query: any){
        products.findOne(query);
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