/*
  Warnings:

  - You are about to drop the column `classroomId` on the `classroomlog` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `classroomlog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `classroomlog` DROP COLUMN `classroomId`,
    DROP COLUMN `teacherId`;
