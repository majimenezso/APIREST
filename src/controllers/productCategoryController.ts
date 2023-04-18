import { Request, Response } from 'express';
import pool from '../database';

class ProductCategoryController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM product_category');
        res.json(entrega);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM product_category WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The product_category doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO product_category set ?', [req.body]);
        res.json({ message: 'product_category Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE product_category set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The product_category was Updated" });
    }
}

const productcategoryController = new ProductCategoryController;
export default productcategoryController;