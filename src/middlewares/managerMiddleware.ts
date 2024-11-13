import { Request, Response, NextFunction } from 'express';
import { DeleteClassroomDTO, registerClassroomDTO } from '../dtos/managerDto.ts';

export const validateRegisterClassroom = (req: Request, res: Response, next: NextFunction) => {
    const { classroom, capacity, floor }: registerClassroomDTO = req.body;

    if (!classroom)
        return res.status(400).json({ message: "Nome da sala é necessario" });
    if (!capacity)
        return res.status(400).json({ message: "Informar a capacidade da sala é obrigatório" });
    if (!floor)
        return res.status(400).json({ message: "Informar o Andar da sala é obrigatório" });

    next();
};

export const validateUpdateClassroom = (req: Request, res: Response, next: NextFunction) => {
    const { classroom, capacity, floor }: registerClassroomDTO = req.body;

    if (!classroom)
        return res.status(400).json({ message: "Nome da sala é necessario" });
    if (!capacity)
        return res.status(400).json({ message: "Informar a capacidade da sala é obrigatório" });
    if (!floor)
        return res.status(400).json({ message: "Informar o Andar da sala é obrigatório" });

    next();
};

export const validateDeleteClassroom = (req: Request, res: Response, next: NextFunction) => {
    const { classroom }: DeleteClassroomDTO= req.body;

     if (!classroom)
     return res.status(400).json({ message: "O nome da sala de aula é obrigatório." });

    next();
};