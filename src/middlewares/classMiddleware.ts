import { Request, Response, NextFunction } from 'express';

export function validateClass(req: Request, res: Response, next: NextFunction) {
  const { name, startDate, endDate, instructorId } = req.body;

  if (!name || !startDate || !endDate || !instructorId) {
    return res.status(400).json({ message: 'Campos obrigatórios faltando.' });
  }

  // Validação de datas
  if (new Date(startDate) > new Date(endDate)) {
    return res.status(400).json({ message: 'A data de início deve ser anterior à data de término.' });}}