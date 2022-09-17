import { prisma } from '../config/database';
import { usuarioData } from '../types/loginType';
interface Provas {
    name:string,
    pdfUrl:string,
    categoryId:number,
    teacherDisciplineId:number
  }
export async function getUsuario(token:string) {
    return await prisma.usuario.findMany({ where:{
        token:{endsWith:token}
    }});
} 
export async function insert(usuario: Provas) {
    console.log('aC')
    await prisma.tests.create({ data: usuario });
}
export async function getProvas() {
    return await prisma.terms.findMany({ 
     include:{
        disciplines:{
            include:{
                teachersDisciplines:{
                    include:{
                        tests:{
                            include:{
                                categories:true
                            }
                        }
                    }
                },
            },
          
        },
     },
    

});
   
}
export async function getProfProvas() {
    return await prisma.teachers.findMany({ 
     include:{
        teachersDisciplines:{
            include:{
                disciplines:true,
                tests:{
                    include:{
                        categories:true
                    }
                },
                teachers:true
            },
          
        },
     },
    

});
   
}