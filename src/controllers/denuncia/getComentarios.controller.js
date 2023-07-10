import {pool} from './../../db.js'
export const getComentarios = async (req,res) =>{
    const [rows] = await pool.query(`SELECT idDenuncia,descripcion,comentario 
    FROM denuncias
    INNER JOIN comentarios
    on denuncias.idDenuncia = comentarios.idDenincia
    where PASSWORD = ?`,[
        req.params.password
    ])
    res.json(rows);
};