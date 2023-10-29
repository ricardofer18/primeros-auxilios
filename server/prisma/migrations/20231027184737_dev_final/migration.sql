/*
  Warnings:

  - You are about to drop the `Perfil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `hora` on the `Ficha` table. All the data in the column will be lost.
  - You are about to drop the column `hora_entrada` on the `Ficha` table. All the data in the column will be lost.
  - You are about to drop the column `hora_salida` on the `Ficha` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `perfil_id` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `rol_id` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `run` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Rol` table. All the data in the column will be lost.
  - You are about to drop the column `apellidos` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `celular` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `correo` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `nombre_contacto` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `nombres` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `numero_contacto` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `prevision` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `rol_id` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `run` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `cuenta_activa` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `persona_id` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargo` to the `Rol` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personal_id` to the `Rol` table without a default value. This is not possible if the table is not empty.
  - Added the required column `persona_id` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prevision_id` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Perfil";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Persona" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombres" TEXT NOT NULL,
    "primer_apellido" TEXT NOT NULL,
    "segundo_apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "run" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Fono" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numero" TEXT NOT NULL,
    "persona_id" TEXT NOT NULL,
    CONSTRAINT "Fono_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "Persona" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Auth" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "personal_id" TEXT NOT NULL,
    CONSTRAINT "Auth_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "Personal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Prevision" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Documento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "paciente_id" TEXT NOT NULL,
    CONSTRAINT "Documento_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ficha" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fecha" TEXT NOT NULL,
    "motivo_consulta" TEXT NOT NULL,
    "presion_sistolica" INTEGER NOT NULL,
    "presion_diastolica" INTEGER NOT NULL,
    "frecuencia_cardiaca" INTEGER NOT NULL,
    "frecuencia_respiratoria" INTEGER NOT NULL,
    "temperatura" REAL NOT NULL,
    "saturacion" INTEGER NOT NULL,
    "hgt" INTEGER NOT NULL,
    "eva" INTEGER NOT NULL,
    "procedimiento" TEXT NOT NULL,
    "paciente_id" TEXT NOT NULL,
    "personal_id" TEXT NOT NULL,
    CONSTRAINT "Ficha_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ficha_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "Personal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ficha" ("eva", "fecha", "frecuencia_cardiaca", "frecuencia_respiratoria", "hgt", "id", "motivo_consulta", "paciente_id", "personal_id", "presion_diastolica", "presion_sistolica", "procedimiento", "saturacion", "temperatura") SELECT "eva", "fecha", "frecuencia_cardiaca", "frecuencia_respiratoria", "hgt", "id", "motivo_consulta", "paciente_id", "personal_id", "presion_diastolica", "presion_sistolica", "procedimiento", "saturacion", "temperatura" FROM "Ficha";
DROP TABLE "Ficha";
ALTER TABLE "new_Ficha" RENAME TO "Ficha";
CREATE UNIQUE INDEX "Ficha_id_key" ON "Ficha"("id");
CREATE TABLE "new_Personal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "persona_id" TEXT NOT NULL,
    "cuenta_activa" BOOLEAN NOT NULL,
    CONSTRAINT "Personal_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "Persona" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Personal" ("id") SELECT "id" FROM "Personal";
DROP TABLE "Personal";
ALTER TABLE "new_Personal" RENAME TO "Personal";
CREATE UNIQUE INDEX "Personal_id_key" ON "Personal"("id");
CREATE TABLE "new_Rol" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cargo" TEXT NOT NULL,
    "personal_id" TEXT NOT NULL,
    CONSTRAINT "Rol_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "Personal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Rol" ("id") SELECT "id" FROM "Rol";
DROP TABLE "Rol";
ALTER TABLE "new_Rol" RENAME TO "Rol";
CREATE UNIQUE INDEX "Rol_id_key" ON "Rol"("id");
CREATE UNIQUE INDEX "Rol_personal_id_key" ON "Rol"("personal_id");
CREATE TABLE "new_Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fecha_nacimiento" TEXT NOT NULL,
    "jornada" TEXT NOT NULL,
    "plan_estudios" TEXT NOT NULL,
    "semestre" TEXT NOT NULL,
    "ucm" BOOLEAN NOT NULL,
    "seguro_MOK" BOOLEAN NOT NULL,
    "persona_id" TEXT NOT NULL,
    "prevision_id" TEXT NOT NULL,
    CONSTRAINT "Paciente_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "Persona" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Paciente_prevision_id_fkey" FOREIGN KEY ("prevision_id") REFERENCES "Prevision" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Paciente" ("fecha_nacimiento", "id", "jornada", "plan_estudios", "seguro_MOK", "semestre", "ucm") SELECT "fecha_nacimiento", "id", "jornada", "plan_estudios", "seguro_MOK", "semestre", "ucm" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
CREATE UNIQUE INDEX "Paciente_id_key" ON "Paciente"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Persona_id_key" ON "Persona"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_correo_key" ON "Persona"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Fono_id_key" ON "Fono"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Auth_id_key" ON "Auth"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Auth_personal_id_key" ON "Auth"("personal_id");

-- CreateIndex
CREATE UNIQUE INDEX "Prevision_id_key" ON "Prevision"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Documento_id_key" ON "Documento"("id");
