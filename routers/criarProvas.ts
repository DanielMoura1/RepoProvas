import { Router } from "express";

import {
    createProvas,
    getProvas,
    getProfProvas
  } from '../controllers/criarProvas';
import {  provaSchema } from '../schemas/schemaPovas';
import { validateSchemaMiddleware } from './../middlewares/validarSchema';
const criarProvasRouter = Router();

criarProvasRouter.post('/criarProvas',validateSchemaMiddleware( provaSchema),createProvas);
criarProvasRouter.get('/getProvas',getProvas);
criarProvasRouter.get('/getProfProvas',getProfProvas);
export default criarProvasRouter;
