"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productcategoryController_1 = __importDefault(require("../controllers/productCategoryController"));
class ProductCategoryRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productcategoryController_1.default.list);
        this.router.get('/:id', productcategoryController_1.default.getOne);
        this.router.post('/', productcategoryController_1.default.create);
        this.router.put('/:id', productcategoryController_1.default.update);
    }
}
exports.default = new ProductCategoryRoutes().router;