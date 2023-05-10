import { Request, Response } from "express";
import { insufficientParameters, mongoError, successResponse, failureResponse } from "../modules/common/service";
import { IProduct } from '../modules/products/model';
import ProductService from "../modules/products/service";
import e = require('express');

export class ProductController {

    private product_service: ProductService = new ProductService();

    public async create_product(req: Request, res: Response) {
        if(req.body.name && 
            req.body.discription &&
            req.body.price){
                const product_params: IProduct = {
                    name: req.body.name,
                    discription : req.body.discription,
                    price: req.body.price,
                    modification_notes: [{
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: 'New user created'
                    }]
                }
                try {
                    const savedProduct = await this.product_service.createProduct(product_params);
                    successResponse('create Product successfull', savedProduct, res);
                } catch (err) {
                    mongoError(err, res);
                }
            } else {
                // error response if some fields are missing in request body
                insufficientParameters(res);
            }
    }
    
    public get_product(req: Request, res: Response) {
        if (req.params.id) {
            const product_filter = { _id: req.params.id };
            try {
                const product_data = this.product_service.filterProduct(product_filter);
                successResponse('get product successfull', product_data, res);
            } catch (err) {
                mongoError(err, res);
            }
        } else {
            insufficientParameters(res);
        }
    }

    public delete_product(req: Request, res: Response) {
        if (req.params.id) {
            this.product_service.deleteProduct(req.params.id, (err: any, delete_details) => {
                if (err) {
                    mongoError(err, res);
                } else if (delete_details.deletedCount !== 0) {
                    successResponse('delete product successfull', null, res);
                } else {
                    failureResponse('invalid product', null, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }
}