-- CreateTable
CREATE TABLE "Rol" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Perfil" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Personal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "run" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol_id" TEXT NOT NULL,
    "perfil_id" TEXT NOT NULL,
    CONSTRAINT "Personal_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "Rol" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Personal_perfil_id_fkey" FOREIGN KEY ("perfil_id") REFERENCES "Perfil" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "run" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "fecha_nacimiento" DATETIME NOT NULL,
    "correo" TEXT NOT NULL,
    "prevision" TEXT NOT NULL,
    "jornada" TEXT NOT NULL,
    "plan_estudios" TEXT NOT NULL,
    "semestre" INTEGER NOT NULL,
    "celular" TEXT NOT NULL,
    "nombre_contacto" TEXT NOT NULL,
    "numero_contacto" TEXT NOT NULL,
    "ucm" BOOLEAN NOT NULL,
    "seguro_MOK" BOOLEAN NOT NULL,
    "rol_id" TEXT NOT NULL,
    CONSTRAINT "Paciente_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "Rol" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ficha" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "paciente_id" TEXT NOT NULL,
    "fecha" DATETIME NOT NULL,
    "hora" DATETIME NOT NULL,
    "hora_entrada" DATETIME NOT NULL,
    "hora_salida" DATETIME NOT NULL,
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
    "personal_id" TEXT NOT NULL,
    CONSTRAINT "Ficha_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ficha_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "Personal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
