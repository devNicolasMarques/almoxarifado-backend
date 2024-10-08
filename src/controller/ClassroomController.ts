import { Request, Response } from 'express';
import { ClassroomService } from '../services/classroom.service.ts';
import { BorrowClassroomDTO, GiveBackClassroomDTO } from '../dtos/classroomDto.ts';

const classroomService = new ClassroomService();

class ClassroomController {
  static async getClassroomDisponibility(req: Request, res: Response): Promise<void> {
    try {
      const teacherClassroom = await classroomService.getClassroomDisponibility();
      res.status(200).json({ teacherClassroom });
    } catch (error) {
      res.status(500).json({ error: error});
    }
  }

  static async borrowClassroom(req: Request, res: Response): Promise<void> {
    const data: BorrowClassroomDTO = req.body;

    try {
      await classroomService.borrowClassroom(data);
      res.status(201).json({ message: "Sala emprestada com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async giveBackClassroom(req: Request, res: Response): Promise<void> {
    const data: GiveBackClassroomDTO = req.body;

    try {
      await classroomService.giveBackClassroom(data);
      res.status(201).json({ message: "Atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

export default ClassroomController;