import express from "express"
import denunciaRoutes from "./routes/denuncia.routes.js"
import userRoutes from "./routes/usuario.router.js"
import {PORT}  from "./config.js"
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',denunciaRoutes)
app.use('/api',userRoutes)
app.listen(PORT)
console.log(`server on port ${PORT}`);