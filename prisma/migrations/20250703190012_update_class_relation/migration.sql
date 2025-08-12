/*
  Warnings:

  - Added the required column `classId` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reservation` ADD COLUMN `classId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
