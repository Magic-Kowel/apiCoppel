import { pool } from "../db.js";
import jwt from "jsonwebtoken";
import {SECRET_KEY} from "../config.js";
export  const loginUser = async(req,res) =>{
    try {
        const {correo,password} = req.body;
        console.log(req.body);
        const [row] = await pool.query(`SELECT 
            *
            FROM
            usuarios
            WHERE correo = ?`,[correo]);
        if(row.length){
            if(row[0].correo == correo &&  row[0].PASSWORD ==password){
                const token = jwt.sign({
                    id: row[0].idUsuario,
                },
                SECRET_KEY,
                {
                    expiresIn: '7d'
                })
                return res.json({
                    idUser: row[0].usuario_id,
                    message: 'Logged in successfully',
                    auth: true,
                    token: token
                });
            }
        }
        return res.status(200).json({ 
            message: 'Incorrect email or password',
            logged:false 
        });
    } catch (error) {
        console.log(error);
    }
}