import server from '../index';
import supertest from 'supertest';
import { prisma } from '../config/database';

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE usuario;`;
});
afterAll(async () => {
  await prisma.$disconnect();
});
describe("POST /usuario", () => {
    it("validar a criaçao do usuario",  async () => {
        const body = {
          email: 'Daniel@gmail.com',
          senha: '123',
          senha2:'123'
        };
        const result = await supertest(server).post("/criarUser").send(body);
        const status = result.status;
        
        expect(status).toEqual(201);
    });
    it("validar nao poder criar dois usuarios iguais",  async () => {
      const body = {
        email: 'Daniel@gmail.com',
        senha: '123',
        senha2:'123'
      };
      await supertest(server).post("/criarUser").send(body);
      const result = await supertest(server).post("/criarUser").send(body);
      const status = result.status;
      
      expect(status).toEqual(500);
  });
    it("validar o login do usuario",  async () => {
      const usuario = {
        email: 'Daniel@gmail.com',
        senha: '123',
        senha2:'123'
      };
      await supertest(server).post("/criarUser").send(usuario);
      const body = {
        email: 'Daniel@gmail.com',
        senha: '123',
      };
      const result = await supertest(server).post("/login").send(body);
      const status = result.status;
     
      console.log(result.body)
      expect(status).toEqual(201);
  });
  it("validar resposta se o usuario nao existir na  hora do login ",  async () => {
    const body = {
      email: 'Beber@gmail.com',
      senha: '123'
    };

    const result = await supertest(server).post("/login").send(body);
    const status = result.status;
    expect(status).toEqual(500);
});

    
});