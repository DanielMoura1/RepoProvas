import * as userRepository from '../repositories/loginRepositorie';
import { usuarioData } from '../types/loginType';
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import Cryptr from 'cryptr';
interface login {
    email:string,
    senha:string,
    senha2:string
  }
  
export async function varificarEmail(usuario:login) {
    const user ={
        email:usuario.senha,
        senha:usuario.senha,
        token:null
    }
    const email= await userRepository.getEmail(user)
    if(email.length>0){
        throw { code: 'NotFound', message: 'email invalido' }
    }
   
}
export async function criarUsuario(usuario: login) {
    const cryptr = new Cryptr('myTotallySecretKey');
    const encryptedString = cryptr.encrypt('bacon');
    const decryptedString = cryptr.decrypt(encryptedString);
      usuario.senha= bcrypt.hashSync(usuario.senha, 10);
    const user={
        email:usuario.email,
        senha:usuario.senha,
        token:null
    }
     return await userRepository.insert(user);
}
export async function varificarLogin(usuario: usuarioData) {
    const email= await userRepository.getEmail(usuario)
    console.log(email.length)
    if(email.length===0){
        throw { code: 'NotFound', message: 'email ou senha invalida' }
    }
    const senha= bcrypt.compareSync(usuario.senha,  email[0].senha)
    if(!senha){
        console.log('senha invalida')
        throw { code: 'NotFound', message: 'email ou senha invalida' }
      }
    
}
export async function criarToken(usuario: usuarioData) {
    const secretKey = 'skljaksdj9983498327453lsldkjf';
       
    const nossoToken:string = jwt.sign(
        {
          email: usuario.email,
          password: usuario.senha,
        },
        secretKey,
        {
          expiresIn: '1y',
          subject: '1',
        }
      );
    console.log('?')
    console.log(nossoToken)
    const resposta ={
      token:nossoToken
    }
    return resposta
}
export async function updateUsuario(usuario: usuarioData,token:string) {
  const id= await userRepository.getEmail(usuario)
 await userRepository.updateToken(id[0].id, token)
}