import {pool} from './../../db.js'
import { v4 as uuidv4 } from 'uuid';
export const createDenuncia = async (req,res) =>{
    const maxLength =20; // Longitud máxima deseada
    const uniqueKey = uuidv4().slice(0, maxLength);
    const {
        empresa,
        pais,
        estado,
        numeroCentro,
        nombreCompleto,
        correo,
        telefono,
        descripcion,
        fecha
    }=req.body
    const [rows] = await pool.query(`INSERT INTO denuncias (
        empresa,
        pais,
        estado,
        numeroCentro,
        nombreCompleto,
        correo,
        telefono,
        descripcion,
        fecha,
        PASSWORD
    ) values (?,?,?,?,?,?,?,?,?,?)`,
    [   empresa,
        pais,
        estado,
        numeroCentro,
        nombreCompleto,
        correo,
        telefono,
        descripcion,
        fecha,
        uniqueKey
    ]);
    res.send({
        id:rows.insertId,
        mesage:"creado con exito",
        password:uniqueKey
    });
}