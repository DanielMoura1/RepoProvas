import { Request, Response } from 'express';
import * as usuarioService from '../service/loginService';
import { usuarioData } from '../types/loginType';
interface login {
  email:string,
  senha:string,
  senha2:string
}

export async function OI(req: Request, res: Response) {
    console.log('oiii')   
}
export async function createUsuario(req: Request, res: Response) {
  const usuario:login = req.body;

  try{
      await usuarioService.varificarEmail(usuario)
      await usuarioService.criarUsuario(usuario);
      res.status(200).send('Usuario criado com sucesso!!');
  }catch(error){
      res.status(500).send(error)
  }
  
}
export async function loginUsuario(req: Request, res: Response) {
  const usuario: usuarioData = req.body;

  try{
    await usuarioService.varificarLogin(usuario)
    const nossoToken = await usuarioService.criarToken(usuario)
    await usuarioService.updateUsuario(usuario,nossoToken)
      res.send(nossoToken);
  }catch(error){
      res.status(500).send(error)
  }
  
}

