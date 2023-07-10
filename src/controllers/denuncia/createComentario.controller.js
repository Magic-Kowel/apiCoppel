import {pool} from './../../db.js'
export const createComentario = async (req,res) =>{
    const {
        idDenuncia,
        comentario
    }=req.body
    const [rows] = await pool.query(`INSERT INTO comentarios (
        idDenincia,
        comentario
    ) values (?,?)`,
    [
        idDenuncia,
        comentario
    ]);
    res.send({
        id:rows.insertId,
        mesage:"creado con exito",
    });
}