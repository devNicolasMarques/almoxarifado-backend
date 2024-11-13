import { prisma } from '../lib/prisma.ts';
import { BorrowClassroomDTO, GiveBackClassroomDTO } from '../dtos/classroomDto.ts';
import { Prisma } from '@prisma/client/edge';

export class ClassroomService {
  async getClassroomDisponibility() {
    return await prisma.teacherClassroom.findMany({
      select: {
        teacherId: false,
        classroomId: false,
        id: true,
        classroom: {
          select: {
            name: true,
            floor: true,
            capacity: true,
            isAvailable: true
          }
        },
        teacher: {
          select: {
            name: true,
            surname: true
          }
        }
      }
    });
  }

  async borrowClassroom(data: BorrowClassroomDTO) {
    const { classroom, teacherName, teacherSurname } = data;
    const now = new Date();
    now.setHours(now.getHours());

    const getTeacher = await prisma.teacher.findFirst({
      where: {
        name: teacherName,
        surname: teacherSurname
      },
    });

    const getClassroom = await prisma.classroom.findUnique({
      where: {
        name: classroom
      },
    });

    const teacherId = getTeacher?.id;
    const classroomId = getClassroom?.id;

    if (!teacherId || !classroomId) {
      throw new Error("Professor ou sala de aula não encontrados.");
    }

    const teacherClassroomRecord = await prisma.teacherClassroom.findFirst({
      where: {
        classroomId: classroomId
      }
    });

    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.classroom.update({
        where: {
          id: classroomId
        },
        data: {
          isAvailable: false
        }
      });

      if (teacherClassroomRecord) {
        await tx.teacherClassroom.update({
          where: {
            id: teacherClassroomRecord.id
          },
          data: {
            teacherId: teacherId
          }
        });

        await tx.classroomLog.create({
          data: {
            action: `A sala ${classroom} foi emprestada por ${teacherName} ${teacherSurname}`,
            updatedAt: now
          }
        });
      } else {
        throw new Error("Erro ao encontrar a sala");
      }
    });
  }

  async giveBackClassroom(data: GiveBackClassroomDTO) {
    const { classroom } = data;
    const now = new Date();
    now.setHours(now.getHours());

    const getClassroom = await prisma.classroom.findUnique({
      where: {
        name: classroom
      },
    });

    const classroomId = getClassroom?.id;

    const teacherClassroomRecord = await prisma.teacherClassroom.findFirst({
      where: {
        classroomId: classroomId
      }
    });

    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.classroom.update({
        where: {
          id: classroomId
        },
        data: {
          isAvailable: true
        }
      });

      if (teacherClassroomRecord) {
        await tx.teacherClassroom.update({
          where: {
            id: teacherClassroomRecord.id
          },
          data: {
            teacherId: null
          }
        });

        await tx.classroomLog.create({
          data: {
            action: `A sala ${classroom} foi devolvida`,
            updatedAt: now
          }
        });
      } else {
        throw new Error("Erro ao encontrar a sala");
      }
    });
  }

}