-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Personal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "persona_id" TEXT NOT NULL,
    "cuenta_activa" BOOLEAN NOT NULL,
    "rol_id" TEXT,
    CONSTRAINT "Personal_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "Persona" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Personal_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "Rol" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Personal" ("cuenta_activa", "id", "persona_id", "rol_id") SELECT "cuenta_activa", "id", "persona_id", "rol_id" FROM "Personal";
DROP TABLE "Personal";
ALTER TABLE "new_Personal" RENAME TO "Personal";
CREATE UNIQUE INDEX "Personal_id_key" ON "Personal"("id");
CREATE UNIQUE INDEX "Personal_persona_id_key" ON "Personal"("persona_id");
CREATE UNIQUE INDEX "Personal_rol_id_key" ON "Personal"("rol_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
