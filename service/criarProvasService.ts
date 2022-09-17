import * as userRepository from '../repositories/criarProvasRepositorie';
import { usuarioData } from '../types/loginType';
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import Cryptr from 'cryptr';
interface Provas {
    name:string,
    pdfUrl:string,
    categoryId:number,
    teacherDisciplineId:number
  }
export async function pegarUsuario(token:string) {
    console.log('???')
    if(token.length===0){
        throw { code: 'NotFound', message: 'token null' }
    }
    const usuario =await userRepository.getUsuario(token)
    if(usuario.length ==0){
        throw { code: 'NotFound', message: 'token invalido' }
    }
     return usuario[0]
}
export async function criarSite(credenciais: Provas,id: number) {
    console.log('ab')
    console.log('ab')
    return await userRepository.insert(credenciais)

}
export async function pegarProvas() {
    const usuario =await userRepository.getProvas()
    if(usuario.length===0){
      throw { code: 'NotFound', message: 'id invalido' }
  }
     return usuario
}
export async function pegarProfProvas() {
    const usuario =await userRepository.getProfProvas()
    if(usuario.length===0){
      throw { code: 'NotFound', message: 'id invalido' }
  }
     return usuario
}