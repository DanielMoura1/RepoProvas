import { Request, Response } from 'express';
import * as ProvasService from '../service/criarProvasService';
//import { usuarioData } from '../types/loginType';
interface login {
  email:string,
  senha:string,
  senha2:string
}

export async function createProvas(req: Request, res: Response) {
  
  const credenciais = req.body;
  const { authorization } = req.headers;
  const token:string = authorization?.replace('Bearer ', '');
  
    try{
        //console.log(credenciais)
        console.log(token)
        const usuario =await ProvasService.pegarUsuario(token)
        await ProvasService.criarSite(credenciais,usuario.id)
        //const Nomecartao =await credenciaisService.pegarSite(usuario.id,credenciais.titulo)
        //await credenciaisService.criarCredenciais(credenciais,Nomecartao.id)
        res.status(201).send('Cartão criado com sucesso!!');
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  export async function getProvas(req: Request, res: Response) {
   
    const id = parseInt(req.params.id);
    const { authorization } = req.headers;
    const token:any = authorization?.replace('Bearer ', '');
    
    try{
      
        console.log(token)
        const usuario =await ProvasService.pegarUsuario(token)
        const cd =await ProvasService.pegarProvas()
        console.log(cd)
        res.status(201).send(cd);
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  export async function getProfProvas(req: Request, res: Response) {
   
    
    const { authorization } = req.headers;
    const token:any = authorization?.replace('Bearer ', '');
    
    try{
      
        console.log(token)
        const usuario =await ProvasService.pegarUsuario(token)
        const cd =await ProvasService.pegarProfProvas()
        console.log(cd[0].teachersDisciplines[0])
        res.status(201).send(cd);
    }catch(error){
        res.status(500).send(error)
    }
    
  }