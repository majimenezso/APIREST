import { Request, Response } from 'express';
import pool from '../database';

class ProductimageController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM product_image');
        res.json(entrega);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM product_image WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The product_image doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO product_image set ?', [req.body]);
        res.json({ message: 'product image Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE product_image set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The product Image was Updated" });
    }
}

const productmageController = new ProductimageController;
export default productmageController;