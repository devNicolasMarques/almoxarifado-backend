import { Request, Response } from 'express';
import { AuthService } from "../services/auth.service.ts";
import { LoginDTO, RegisterDTO } from "../dtos/authDto.ts";

const authService = new AuthService();

class AuthController {
    static async register(req: Request, res: Response): Promise<any> {
        const data: RegisterDTO = req.body;
        try {
            await authService.register(data);
            return res.status(201).json({message: "Registrado com sucesso!"})

        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async login(req: Request, res: Response): Promise<any> {

        const data:LoginDTO = req.body;
        try{
            const result = await authService.login(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    
    }
}

export default AuthController;