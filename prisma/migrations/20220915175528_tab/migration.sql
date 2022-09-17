/*
  Warnings:

  - You are about to drop the column `nome` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `disciplines` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `teachers` table. All the data in the column will be lost.
  - You are about to drop the column `pdfUri` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the `teacherDisciplines` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `disciplines` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `teachers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `disciplines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdfUrl` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teacherDisciplines" DROP CONSTRAINT "teacherDisciplines_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teacherDisciplineId_fkey";

-- DropIndex
DROP INDEX "categories_nome_key";

-- DropIndex
DROP INDEX "disciplines_nome_key";

-- DropIndex
DROP INDEX "teachers_nome_key";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "nome",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "disciplines" DROP COLUMN "nome",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "nome",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "pdfUri",
ADD COLUMN     "pdfUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "teacherDisciplines";

-- CreateTable
CREATE TABLE "teachersDisciplines" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "teachersDisciplines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "disciplines_name_key" ON "disciplines"("name");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_name_key" ON "teachers"("name");

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teachersDisciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

--// módulos do curso
INSERT INTO terms ("number") VALUES (1);
INSERT INTO terms ("number") VALUES (2);
INSERT INTO terms ("number") VALUES (3);
INSERT INTO terms ("number") VALUES (4);
INSERT INTO terms ("number") VALUES (5);
INSERT INTO terms ("number") VALUES (6);

--// tipos de provas
INSERT INTO categories ("name") VALUES ('Projeto');
INSERT INTO categories ("name") VALUES ('Prática');
INSERT INTO categories ("name") VALUES ('Recuperação');

--// professores(as)
INSERT INTO teachers ("name") VALUES ('Diego Pinho');
INSERT INTO teachers ("name") VALUES ('Bruna Hamori');

--// disciplinas
INSERT INTO disciplines ("name", "termId") VALUES ('HTML e CSS', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('JavaScript', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('React', 3);
INSERT INTO disciplines ("name", "termId") VALUES ('Humildade', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('Planejamento', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('Autoconfiança', 3);

--// professores(as) e disciplinas
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 2);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 3); 
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 4);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 5);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6);