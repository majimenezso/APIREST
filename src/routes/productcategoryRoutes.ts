import express, { Router } from 'express';
import productcategoryController from '../controllers/productCategoryController';

class ProductcategoryRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', productcategoryController.list);
        this.router.get('/:id', productcategoryController.getOne);
        this.router.post('/', productcategoryController.create);
        this.router.put('/:id', productcategoryController.update);
    }

}

export default new ActaRoutes().router;