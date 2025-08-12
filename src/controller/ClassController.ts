import { Request, Response } from 'express';
// import ClassService from '../service/ClassService'; // Descomente se existir o service

class ClassController {
  async create(req: Request, res: Response) {
    // Lógica para criar uma turma
    return res.status(201).json({ message: 'Turma criada com sucesso.' });
  }

  async list(req: Request, res: Response) {
    // Lógica para listar turmas
    return res.status(200).json([]);
  }

  async update(req: Request, res: Response) {
    // Lógica para atualizar uma turma
    return res.status(200).json({ message: 'Turma atualizada com sucesso.' });
  }

  async delete(req: Request, res: Response) {
    // Lógica para deletar uma turma
    return res.status(200).json({ message: 'Turma deletada com sucesso.' });
  }
}

export default new ClassController();