
import { prisma } from '../lib/prisma.ts';
import { teacherDeleteDTO, teacherDTO, teacherUpdateDTO } from '../dtos/teacherDto.ts';

export class TeacherService {

    async getAllTeachers() { 
        return await prisma.teacher.findMany({
            select: {
                id: true,
                name: true,
                surname: true,
                email: true,
                code: true
            }
        })
    }

    async registerTeacher(data: teacherDTO) {
        const { name, surname, email, code } = data;  
        return await prisma.teacher.create({
            data: {
                name: name,
                surname: surname,
                email: email,
                code: code
            }
        });
    }

    async updateTeacher(data: teacherUpdateDTO) {
        const { id, name, surname, email, code } = data;  
        return await prisma.teacher.update({
            where: {
                id: id
            },
            data: {
                name: name,
                surname: surname,
                email: email,
                code: code
            }
        });
    }

    async deleteTeacher(data: teacherDeleteDTO) {
        const { id } = data;  
        console.log(id)
        return await prisma.teacher.delete({
            where: {
                id: id
            },
        });
    }



}