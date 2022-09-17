import Joi from 'joi';
import { usuarioData } from '../types/loginType';

export const provaSchema = Joi.object({
    name: Joi.string().required(),
    pdfUrl:Joi.string().required(),
    categoryId:Joi.number().required(),
    teacherDisciplineId:Joi.number().required()
  });
  
