import { Request, Response } from 'express';
// import ReservationService from '../service/ReservationService'; // Descomente se existir o service

class ReservationController {
  async create(req: Request, res: Response) {
    // Lógica para criar uma reserva
    return res.status(201).json({ message: 'Reserva criada com sucesso.' });
  }

  async list(req: Request, res: Response) {
    // Lógica para listar reservas
    return res.status(200).json([]);
  }

  async update(req: Request, res: Response) {
    // Lógica para atualizar uma reserva
    return res.status(200).json({ message: 'Reserva atualizada com sucesso.' });
  }

  async delete(req: Request, res: Response) {
    // Lógica para deletar uma reserva
    return res.status(200).json({ message: 'Reserva deletada com sucesso.' });
  }
}

export default new ReservationController();