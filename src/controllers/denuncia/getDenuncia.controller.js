import {pool} from './../../db.js'
export const getDenuncia = async (req,res) =>{
    const [rows] = await pool.query("select * from denuncias")
    res.json(rows);
};