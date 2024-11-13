import { Request, Response, NextFunction } from 'express';
import { GiveBackClassroomDTO } from '../dtos/classroomDto.ts';
import { teacherDeleteDTO, teacherDTO } from '../dtos/teacherDto.ts';

export const validateRegisterTeacher = (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, email, code }: teacherDTO = req.body;

    if (!name)
        return res.status(400).json("O nome do professor é obrigatório")
    if (!surname)
        return res.status(400).json("O sobrenome do professor é obrigatório")
    if (!email)
        return res.status(400).json("O email do professor é obrigatório")
    if (!code)
        return res.status(400).json("O código do professor é obrigatório")

    next();
};

export const validateUpdateTeacher = (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, email, code }: teacherDTO = req.body;

    if (!name)
        return res.status(400).json("O nome do professor é obrigatório")
    if (!surname)
        return res.status(400).json("O sobrenome do professor é obrigatório")
    if (!email)
        return res.status(400).json("O email do professor é obrigatório")
    if (!code)
        return res.status(400).json("O código do professor é obrigatório")

    next();
};

export const validateDeleteTeacher = (req: Request, res: Response, next: NextFunction) => {
    const { id }: teacherDeleteDTO = req.body;

    if (!id)
        return res.status(400).json("O nome do professor é obrigatório")
  

    next();
};

