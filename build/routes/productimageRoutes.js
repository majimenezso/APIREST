"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productimageController_1 = __importDefault(require("../controllers/productimageController"));
class ProductImageRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productimageController_1.default.list);
        this.router.get('/:id', productimageController_1.default.getOne);
        this.router.post('/', productimageController_1.default.create);
        this.router.put('/:id', productimageController_1.default.update);
    }
}
exports.default = new ProductImageRoutes().router;