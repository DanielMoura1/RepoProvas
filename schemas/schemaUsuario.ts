import Joi from 'joi';
import { usuarioData } from '../types/loginType';

export const usuarioSchema = Joi.object({
    email: Joi.string().required(),
    senha:Joi.string().length(10).required(),
    senha2:Joi.ref('senha')
  });
  