
import { prisma } from '../lib/prisma.ts';
import { teacherDTO } from '../dtos/teacherDto.ts';

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

}