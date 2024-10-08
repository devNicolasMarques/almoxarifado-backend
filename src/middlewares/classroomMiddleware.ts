import { Request, Response, NextFunction } from 'express';
import { BorrowClassroomDTO, GiveBackClassroomDTO } from '../dtos/classroomDto.ts';

export const validateBorrowClassroom = (req: Request, res: Response, next: NextFunction) => {
  const { classroom, teacherName, teacherSurname }: BorrowClassroomDTO = req.body;

  if (!classroom || !teacherName || !teacherSurname) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  next();
};

export const validateGiveBackClassroom = (req: Request, res: Response, next: NextFunction) => {
  const { classroom }: GiveBackClassroomDTO = req.body;

  if (!classroom) {
    return res.status(400).json({ error: "O campo 'classroom' é obrigatório." });
  }

  next();
};