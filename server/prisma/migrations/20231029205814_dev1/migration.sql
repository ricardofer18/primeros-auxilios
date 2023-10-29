/*
  Warnings:

  - You are about to drop the column `personal_id` on the `Rol` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[persona_id]` on the table `Paciente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rol_id` to the `Personal` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rol" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cargo" TEXT NOT NULL
);
INSERT INTO "new_Rol" ("cargo", "id") SELECT "cargo", "id" FROM "Rol";
DROP TABLE "Rol";
ALTER TABLE "new_Rol" RENAME TO "Rol";
CREATE UNIQUE INDEX "Rol_id_key" ON "Rol"("id");
CREATE TABLE "new_Personal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "persona_id" TEXT NOT NULL,
    "cuenta_activa" BOOLEAN NOT NULL,
    "rol_id" TEXT NOT NULL,
    CONSTRAINT "Personal_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "Persona" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Personal_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "Rol" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Personal" ("cuenta_activa", "id", "persona_id") SELECT "cuenta_activa", "id", "persona_id" FROM "Personal";
DROP TABLE "Personal";
ALTER TABLE "new_Personal" RENAME TO "Personal";
CREATE UNIQUE INDEX "Personal_id_key" ON "Personal"("id");
CREATE UNIQUE INDEX "Personal_persona_id_key" ON "Personal"("persona_id");
CREATE UNIQUE INDEX "Personal_rol_id_key" ON "Personal"("rol_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_persona_id_key" ON "Paciente"("persona_id");
