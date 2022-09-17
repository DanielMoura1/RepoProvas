import server from '../index';
import supertest from 'supertest';
import { prisma } from '../config/database';

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE usuario;`;
  await prisma.$executeRaw`TRUNCATE TABLE tests;`;
});
afterAll(async () => {
  await prisma.$disconnect();
});
describe("POST e GET /provas", () => {
    it("validar a criaçao da prova",  async () => {
        const usuario = {
            email: 'Beber@gmail.com',
            senha: '123',
            senha2:'123'
          };
          await supertest(server).post("/criarUser").send(usuario);
          const login = {
            email: 'Beber@gmail.com',
            senha: '123'
          };
          const tokenUsuario = await supertest(server).post("/login").send(login);
         
         
        const body = {
            name:"IPD",
            pdfUrl:"https://www.netflix.com/br/",
            categoryId:1,
            teacherDisciplineId:1
        };
      
        const result = await supertest(server).post("/criarProvas").send(body).set({ Authorization: tokenUsuario.body.token });
        const status = result.status;
      
        expect(status).toEqual(201);
        console.log(status)
    });
    it("validar pegar provas por periodo",  async () => {
        const usuario = {
            email: 'Beber@gmail.com',
            senha: '123',
            senha2:'123'
          };
          await supertest(server).post("/criarUser").send(usuario);
          const login = {
            email: 'Beber@gmail.com',
            senha: '123'
          };
          const tokenUsuario = await supertest(server).post("/login").send(login);
         
         
        const body = {
            name:"IPD",
            pdfUrl:"https://www.netflix.com/br/",
            categoryId:1,
            teacherDisciplineId:1
        };
      
        const result = await supertest(server).get("/getProvas").set({ Authorization: tokenUsuario.body.token });
        const status = result.status;
        expect(result.body).toBeInstanceOf(Array);
        expect(status).toEqual(201);
       
    });
    it("validar pegar provas por professor",  async () => {
        const usuario = {
            email: 'Beber@gmail.com',
            senha: '123',
            senha2:'123'
          };
          await supertest(server).post("/criarUser").send(usuario);
          const login = {
            email: 'Beber@gmail.com',
            senha: '123'
          };
          const tokenUsuario = await supertest(server).post("/login").send(login);
         
         
        const body = {
            name:"IPD",
            pdfUrl:"https://www.netflix.com/br/",
            categoryId:1,
            teacherDisciplineId:1
        };
      
        const result = await supertest(server).get("/getProfProvas").set({ Authorization: tokenUsuario.body.token });
        const status = result.status;
        expect(result.body).toBeInstanceOf(Array);
        expect(status).toEqual(201);
       
    });
    
});