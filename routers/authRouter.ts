import { Router } from "express";

import {
    OI,
    createUsuario,
    loginUsuario
  } from '../controllers/login';
import {  usuarioSchema} from '../schemas/schemaUsuario';
import {  loginSchema} from '../schemas/schemaLogin';
import { validateSchemaMiddleware } from './../middlewares/validarSchema';
const authRouter = Router();

authRouter.post('/criarUser',validateSchemaMiddleware(usuarioSchema),createUsuario);
authRouter.post('/login',validateSchemaMiddleware(loginSchema),loginUsuario);
export default authRouter;

