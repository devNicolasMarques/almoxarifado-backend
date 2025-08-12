import { Request, Response, NextFunction } from 'express';
import { RegisterDTO, LoginDTO } from '../dtos/authDto.ts';

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const {password, confirmPassword }: RegisterDTO = req.body;

    if (!password)
        return res.status(400).json("A senha é obrigatória")
    if (!confirmPassword)
        return res.status(400).json("A confirmação de senha é obrigatória")
    if (password !== confirmPassword)
        return res.status(400).json("As senhas não coincidem")


    next();
};

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { username, password }: LoginDTO = req.body;

    if (!username)
        return res.status(400).json("O usuário é obrigatório")
    if (!password)
        return res.status(400).json("A senha é obrigatória")

    next();
};
