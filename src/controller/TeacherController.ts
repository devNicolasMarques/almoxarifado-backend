import { Request, Response } from 'express';
import { TeacherService } from '../services/teacher.service.ts';
import { teacherDTO } from '../dtos/teacherDto.ts';

const teacherService = new TeacherService();

class TeacherController {
    static async getAllTeachers(req: Request, res: Response): Promise<any> {
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
}

export default TeacherController;