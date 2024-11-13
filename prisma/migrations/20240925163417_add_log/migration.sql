/*
  Warnings:

  - You are about to drop the `classroomlog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `classroomlog`;

-- CreateTable
CREATE TABLE `classroom_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `action` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
