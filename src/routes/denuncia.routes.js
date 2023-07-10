import {Router} from "express";
import { getDenuncia } from "../controllers/denuncia/getDenuncia.controller.js";
import { createDenuncia } from "../controllers/denuncia/CreateDenuncia.controller.js";
import { createComentario } from "../controllers/denuncia/createComentario.controller.js";
import { getComentarios } from "../controllers/denuncia/getComentarios.controller.js";
const router = Router();
router.get('/denuncia',getDenuncia);
router.get('/comentarios/:password',getComentarios)
router.post('/denuncia',createDenuncia);
router.post('/comentar',createComentario);
export default router;