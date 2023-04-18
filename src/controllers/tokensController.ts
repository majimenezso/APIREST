import { Request, Response } from 'express';
import pool from '../database';

class TokensController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM tokens');
        res.json(entrega);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM tokens WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The tokens doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO tokens set ?', [req.body]);
        res.json({ message: 'tokens Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE tokens set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The tokens was Updated" });
    }
}

const tokensController = new TokensController;
export default tokensController;