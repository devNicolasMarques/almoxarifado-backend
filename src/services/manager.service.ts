
import { prisma } from '../lib/prisma.ts';
import { DeleteClassroomDTO, registerClassroomDTO, updateClassroomDTO } from '../dtos/managerDto.ts';


export class ManagerService {

    async getClassroomLog() {
        const classroomLog = await prisma.classroomLog.findMany({
            select: {
                id: false,
                action: true,
                updatedAt: true
            },
            orderBy: {
                updatedAt: "desc"
            }
        })
        return ({ classroomLog })
    }

    async registerClassroom(data: registerClassroomDTO) {

        const { classroom, capacity, floor } = data;

        const classroomExist = await prisma.classroom.findUnique(
            {
                where: {
                    name: classroom
                }
            }
        );

        if (classroomExist)
            throw new Error('Esta sala de aula já existe')

        await prisma.classroom.create({
            data: {
                name: classroom,
                capacity: capacity,
                floor: floor
            }
        })

        const insertedClassroom = await prisma.classroom.findUnique({
            where: {
                name: classroom
            },
            select: {
                id: true
            }
        })
        if (insertedClassroom) {
            await prisma.teacherClassroom.create({
                data: {
                    classroomId: insertedClassroom.id,
                    teacherId: null
                }
            })

        }

    }

    async updateClassroom(data: updateClassroomDTO) {
        const { id, classroom, capacity, floor } = data;
        console.log(id)
        const classroomExist = await prisma.classroom.findUnique({
            where: {
                id: id
            }
        });

        if (!classroomExist) {
            throw new Error('Esta sala de aula não existe');
        }

        try {
            await prisma.classroom.update({
                where: {
                    id: id
                },
                data: {
                    name: classroom,
                    capacity: Number(capacity),
                    floor: floor
                }
            });

            const updatedClassroom = await prisma.classroom.findUnique({
                where: {
                    name: classroom
                },
                select: {
                    id: true
                }
            });

            if (updatedClassroom) {
                await prisma.teacherClassroom.updateMany({
                    where: {
                        classroomId: updatedClassroom.id
                    },
                    data: {
                        teacherId: null
                    }
                });
            }
        } catch (err) {
            console.log(err)
            
        }
    }


    async deleteClassroom(data: DeleteClassroomDTO) {

        const { classroom } = data;

        const getClassroom = await prisma.classroom.findUnique({
            where: {
                name: classroom,
            },
        });

        if (!getClassroom)
            throw new Error('Sala de aula não encontrada.')

        const classroomId = getClassroom.id;

        const teacherClassroomRecord = await prisma.teacherClassroom.findFirst({
            where: {
                classroomId: classroomId,
            },
        });

        if (teacherClassroomRecord) {
            await prisma.teacherClassroom.delete({
                where: {
                    id: teacherClassroomRecord.id,
                },
            });
        }

        await prisma.classroom.delete({
            where: {
                id: classroomId,
            },
        });

        return ({ message: "Sala de aula deletada com sucesso." })

    }
}


