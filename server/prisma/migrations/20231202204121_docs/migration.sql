/*
  Warnings:

  - You are about to drop the column `jornada` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `plan_estudios` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `jornada_id` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plan_estudios_id` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Personal_rol_id_key";

-- CreateTable
CREATE TABLE "Plan_Estudios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "cantidad_semestres" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Jornada" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fecha_nacimiento" TEXT NOT NULL,
    "jornada_id" TEXT NOT NULL,
    "plan_estudios_id" TEXT NOT NULL,
    "semestre" TEXT NOT NULL,
    "ucm" BOOLEAN NOT NULL,
    "seguro_MOK" BOOLEAN NOT NULL,
    "persona_id" TEXT NOT NULL,
    "prevision_id" TEXT NOT NULL,
    CONSTRAINT "Paciente_jornada_id_fkey" FOREIGN KEY ("jornada_id") REFERENCES "Jornada" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Paciente_plan_estudios_id_fkey" FOREIGN KEY ("plan_estudios_id") REFERENCES "Plan_Estudios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Paciente_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "Persona" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Paciente_prevision_id_fkey" FOREIGN KEY ("prevision_id") REFERENCES "Prevision" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Paciente" ("fecha_nacimiento", "id", "persona_id", "prevision_id", "seguro_MOK", "semestre", "ucm") SELECT "fecha_nacimiento", "id", "persona_id", "prevision_id", "seguro_MOK", "semestre", "ucm" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
CREATE UNIQUE INDEX "Paciente_id_key" ON "Paciente"("id");
CREATE UNIQUE INDEX "Paciente_persona_id_key" ON "Paciente"("persona_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Plan_Estudios_id_key" ON "Plan_Estudios"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Jornada_id_key" ON "Jornada"("id");
