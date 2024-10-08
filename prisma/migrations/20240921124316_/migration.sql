/*
  Warnings:

  - You are about to drop the `emprestimosala` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `emprestimosala` DROP FOREIGN KEY `emprestimoSala_classroomId_fkey`;

-- DropForeignKey
ALTER TABLE `emprestimosala` DROP FOREIGN KEY `emprestimoSala_teacherId_fkey`;

-- DropTable
DROP TABLE `emprestimosala`;

-- CreateTable
CREATE TABLE `TeacherClassroom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teacherId` INTEGER NOT NULL,
    `classroomId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TeacherClassroom` ADD CONSTRAINT `TeacherClassroom_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `tb_teacher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeacherClassroom` ADD CONSTRAINT `TeacherClassroom_classroomId_fkey` FOREIGN KEY (`classroomId`) REFERENCES `Classroom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
