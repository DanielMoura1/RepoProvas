import Joi from 'joi';


export const usuarioSchema = Joi.object({
    email: Joi.string().email().required(),
    senha:Joi.string().required(),
    senha2:Joi.ref('senha')
  });
  