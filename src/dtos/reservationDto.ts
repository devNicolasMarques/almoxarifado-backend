export interface ReservationDto {
  id?: number;
  classId: number;
  userId: number;
  reservationDate: Date;
  status?: string
}