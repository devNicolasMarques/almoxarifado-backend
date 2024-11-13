import { Request, Response } from 'express';
import { TeacherService } from '../services/teacher.service.ts';
import { teacherDeleteDTO, teacherDTO, teacherUpdateDTO } from '../dtos/teacherDto.ts';

const teacherService = new TeacherService();

class TeacherController {
    static async getAllTeachers(req: Request, res: Response): Promise<void> {
        try {
          const teacher = await teacherService.getAllTeachers();
          res.status(200).json({ teacher });
        } catch (error) {
          res.status(500).json({ error: error});
        }
    }

    static async registerTeacher(req: Request, res: Response): Promise<void> {
        const data: teacherDTO = req.body;
        try {
          const teacher = await teacherService.registerTeacher(data);
          res.status(200).json({ teacher });
        } catch (error) {
          res.status(500).json({ error: error});
        }
    }

    static async updateTeacher(req: Request, res: Response): Promise<void> {
      const data: teacherUpdateDTO = req.body;
      try {
        const teacher = await teacherService.updateTeacher(data);
        res.status(200).json({ teacher });
      } catch (error) {
        res.status(500).json({ error: error});
      }
    }

    static async deleteTeacher(req: Request, res: Response): Promise<void> {
      const data: teacherDeleteDTO = req.body;
      try {
        const teacher = await teacherService.deleteTeacher(data);
        res.status(200).json({ message: "Professor deletado com sucesso" });
      } catch (error) {
        res.status(500).json({ error: error});
      }
  }
}

export default TeacherController;