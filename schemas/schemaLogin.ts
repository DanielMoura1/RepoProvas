import Joi from 'joi';
import { usuarioData } from '../types/loginType';

export const loginSchema = Joi.object<usuarioData>({
    email: Joi.string().email().required(),
    senha:Joi.string().required()
  });
  