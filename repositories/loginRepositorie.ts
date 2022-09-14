import { prisma } from '../config/database';
import { usuarioData } from '../types/loginType';
interface login {
    email:string,
    senha:string,
    senha2:string
  }
  
export async function getEmail(usuario:usuarioData) {
    return await prisma.usuario.findMany({ where:{
        email:usuario.email
    }});
}
export async function insert(usuario: usuarioData) {
    await prisma.usuario.create({ data: usuario });
}
export async function updateToken(id:number,token:string) {
    await prisma.usuario.update({
        where: {
          id: id
        },
        data: {
          token: token
        }
      })
}
