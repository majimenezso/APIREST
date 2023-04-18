import express, { Router } from 'express';
import productController from '../controllers/ProductController';

class ActaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', productController.list);
        this.router.get('/:id', productController.getOne);
        this.router.post('/', productController.create);
        this.router.put('/:id', productController.update);
    }

}

export default new ActaRoutes().router;