/*
  Warnings:

  - You are about to drop the column `floor` on the `classroom` table. All the data in the column will be lost.
  - You are about to drop the column `isAvailable` on the `classroom` table. All the data in the column will be lost.
  - You are about to drop the `classroom_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_manager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_teacher` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teacherclassroom` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `block` to the `Classroom` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `teacherclassroom` DROP FOREIGN KEY `TeacherClassroom_classroomId_fkey`;

-- DropForeignKey
ALTER TABLE `teacherclassroom` DROP FOREIGN KEY `TeacherClassroom_teacherId_fkey`;

-- AlterTable
ALTER TABLE `classroom` DROP COLUMN `floor`,
    DROP COLUMN `isAvailable`,
    ADD COLUMN `block` INTEGER NOT NULL;

-- DropTable
DROP TABLE `classroom_log`;

-- DropTable
DROP TABLE `tb_manager`;

-- DropTable
DROP TABLE `tb_teacher`;

-- DropTable
DROP TABLE `teacherclassroom`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teacherId` INTEGER NULL,
    `classroomId` INTEGER NOT NULL,
    `uc` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_classroomId_fkey` FOREIGN KEY (`classroomId`) REFERENCES `Classroom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
