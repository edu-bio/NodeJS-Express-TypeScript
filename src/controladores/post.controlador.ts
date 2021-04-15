import {Request, Response} from 'express'

import {conectar} from '../database'
import {Libro} from '../interface/libro'

export async function getPosts(req: Request, res: Response): Promise<Response>{
    const conn = await conectar();
    const posts = await conn.query('SELECT * FROM libro');
    return res.json(posts[0]);
};

export async function createLibro(req:Request, res: Response){
    const newLibro: Libro = req.body;
    const conn = await conectar();
    await conn.query('INSERT INTO Libro SET?', [newLibro]);
    return res.json({
        message: 'Libro creado con éxito'
    })
}

export async function getLibro(req: Request, res:Response): Promise<Response>{
    const id = req.params.postId;
    const conn = await conectar();
    const posts = await conn.query('SELECT * FROM Libro WHERE id = ?', [id]);

    return res.json(posts[0]);
}

export async function borrarLibro(req:Request, res: Response){
    const id = req.params.postId;
    const conn = await conectar();
    const posts = await conn.query('DELETE FROM Libro WHERE id = ?', [id]);

    return res.json({message:'Libro eliminado'});
}