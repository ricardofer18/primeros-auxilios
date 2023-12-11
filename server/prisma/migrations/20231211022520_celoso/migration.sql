-- CreateTable
CREATE TABLE `Persona` (
    `id` VARCHAR(191) NOT NULL,
    `nombres` VARCHAR(191) NOT NULL,
    `primer_apellido` VARCHAR(191) NOT NULL,
    `segundo_apellido` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `run` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Persona_id_key`(`id`),
    UNIQUE INDEX `Persona_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fono` (
    `id` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `persona_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Fono_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rol` (
    `id` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Rol_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Personal` (
    `id` VARCHAR(191) NOT NULL,
    `persona_id` VARCHAR(191) NOT NULL,
    `cuenta_activa` BOOLEAN NOT NULL,
    `rol_id` VARCHAR(191) NULL,

    UNIQUE INDEX `Personal_id_key`(`id`),
    UNIQUE INDEX `Personal_persona_id_key`(`persona_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Auth` (
    `id` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `personal_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Auth_id_key`(`id`),
    UNIQUE INDEX `Auth_personal_id_key`(`personal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prevision` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Prevision_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plan_Estudios` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `cantidad_semestres` INTEGER NOT NULL,

    UNIQUE INDEX `Plan_Estudios_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jornada` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Jornada_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paciente` (
    `id` VARCHAR(191) NOT NULL,
    `fecha_nacimiento` VARCHAR(191) NOT NULL,
    `jornada_id` VARCHAR(191) NOT NULL,
    `plan_estudios_id` VARCHAR(191) NOT NULL,
    `semestre` VARCHAR(191) NOT NULL,
    `ucm` BOOLEAN NOT NULL,
    `seguro_MOK` BOOLEAN NOT NULL,
    `persona_id` VARCHAR(191) NOT NULL,
    `prevision_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Paciente_id_key`(`id`),
    UNIQUE INDEX `Paciente_persona_id_key`(`persona_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Documento` (
    `id` VARCHAR(191) NOT NULL,
    `extension` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `paciente_id` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Documento_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha` (
    `id` VARCHAR(191) NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,
    `motivo_consulta` VARCHAR(191) NOT NULL,
    `presion_sistolica` INTEGER NOT NULL,
    `presion_diastolica` INTEGER NOT NULL,
    `frecuencia_cardiaca` INTEGER NOT NULL,
    `frecuencia_respiratoria` INTEGER NOT NULL,
    `temperatura` DOUBLE NOT NULL,
    `saturacion` INTEGER NOT NULL,
    `hgt` INTEGER NOT NULL,
    `eva` INTEGER NOT NULL,
    `procedimiento` VARCHAR(191) NOT NULL,
    `paciente_id` VARCHAR(191) NOT NULL,
    `personal_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Ficha_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Fono` ADD CONSTRAINT `Fono_persona_id_fkey` FOREIGN KEY (`persona_id`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Personal` ADD CONSTRAINT `Personal_persona_id_fkey` FOREIGN KEY (`persona_id`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Personal` ADD CONSTRAINT `Personal_rol_id_fkey` FOREIGN KEY (`rol_id`) REFERENCES `Rol`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auth` ADD CONSTRAINT `Auth_personal_id_fkey` FOREIGN KEY (`personal_id`) REFERENCES `Personal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paciente` ADD CONSTRAINT `Paciente_jornada_id_fkey` FOREIGN KEY (`jornada_id`) REFERENCES `Jornada`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paciente` ADD CONSTRAINT `Paciente_plan_estudios_id_fkey` FOREIGN KEY (`plan_estudios_id`) REFERENCES `Plan_Estudios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paciente` ADD CONSTRAINT `Paciente_persona_id_fkey` FOREIGN KEY (`persona_id`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paciente` ADD CONSTRAINT `Paciente_prevision_id_fkey` FOREIGN KEY (`prevision_id`) REFERENCES `Prevision`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Documento` ADD CONSTRAINT `Documento_paciente_id_fkey` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ficha` ADD CONSTRAINT `Ficha_paciente_id_fkey` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ficha` ADD CONSTRAINT `Ficha_personal_id_fkey` FOREIGN KEY (`personal_id`) REFERENCES `Personal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
