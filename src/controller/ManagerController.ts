import { Request, Response } from 'express';
import 'dotenv/config'
import { ManagerService } from "../services/manager.service.ts";
import { DeleteClassroomDTO, registerClassroomDTO, updateClassroomDTO } from "../dtos/managerDto.ts";

const managerService = new ManagerService();


class ManagerController {

    static async getClassroomLog(req: Request, res: Response): Promise<any> {
        try {
            const classroomLog = await managerService.getClassroomLog();
            return res.status(200).json( classroomLog )
        } catch (error) {
            throw error;
        }
    }

    static async registerClassroom(req: Request, res: Response): Promise<any> {
        const data: registerClassroomDTO = req.body;
        try {
            await managerService.registerClassroom(data)
            return res.status(201).json({ message: "Sala de aula registrada com sucesso!"})
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async updateClassroom(req: Request, res: Response): Promise<any> {
        const data: updateClassroomDTO= req.body;
        try {
            await managerService.updateClassroom(data)
            return res.status(201).json({ message: "Sala de aula atualizada com sucesso!"})
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deleteClassroom(req: Request, res: Response): Promise<any> {
        const data: DeleteClassroomDTO = req.body;

        try {
            const deleteClassroom = await managerService.deleteClassroom(data);
            return res.status(202).json(deleteClassroom);

        } catch (error) {
            // Retorna erro no caso de falha
            console.error("Erro ao deletar sala de aula:", error);
            return res.status(500).json({ message: "Erro interno ao tentar deletar a sala de aula." });
        }
    }
}


export default ManagerController;