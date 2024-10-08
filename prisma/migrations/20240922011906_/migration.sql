-- DropForeignKey
ALTER TABLE `teacherclassroom` DROP FOREIGN KEY `TeacherClassroom_teacherId_fkey`;

-- AlterTable
ALTER TABLE `teacherclassroom` MODIFY `teacherId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `TeacherClassroom` ADD CONSTRAINT `TeacherClassroom_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `tb_teacher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
