import { Request, Response, NextFunction } from 'express';
import { RegisterDTO, LoginDTO } from '../dtos/authDto.ts';

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, email, password, confirmPassword }: RegisterDTO = req.body;

    if (!name)
        return res.status(400).json("O nome é obrigatório")
    if (!surname)
        return res.status(400).json("O sobrenome é obrigatório")
    if (!email)
        return res.status(400).json("O email é obrigatório")
    if (!password)
        return res.status(400).json("A senha é obrigatória")
    if (!confirmPassword)
        return res.status(400).json("A confirmação de senha é obrigatória")
    if (password !== confirmPassword)
        return res.status(400).json("As senhas não coincidem")


    next();
};

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { email, password }: LoginDTO = req.body;

    if (!email)
        return res.status(400).json("O email é obrigatório")
    if (!password)
        return res.status(400).json("A senha é obrigatória")

    next();
};
