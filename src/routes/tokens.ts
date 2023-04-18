import express, { Router } from 'express';
import tokensController from '../controllers/tokensController';

class TokensRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', tokensController.list);
        this.router.get('/:id', tokensController.getOne);
        this.router.post('/', tokensController.create);
        this.router.put('/:id', tokensController.update);
    }

}

export default new TokensRoutes().router;