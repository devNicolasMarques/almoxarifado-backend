import { Request, Response, NextFunction } from 'express';

export function validateReservation(req: Request, res: Response, next: NextFunction) {
  const { classId, userId, reservationDate } = req.body;

  if (!classId || !userId || !reservationDate) {
    return res.status(400).json({ message: 'Campos obrigatórios faltando.' });
  }

  // Validação de data
  if (isNaN(Date.parse(reservationDate))) {
    return res.status(400).json({ message: 'Data de reserva inválida.' });
  }

  next();
}