import { Router } from 'express';
import ClassroomController from '../controller/ClassroomController.ts';
import { validateBorrowClassroom, validateGiveBackClassroom } from '../middlewares/classroomMiddleware.ts';

const route = Router();

route.get('/', ClassroomController.getClassroomDisponibility);
route.post('/borrow', validateBorrowClassroom, ClassroomController.borrowClassroom);
route.post('/giveback', validateGiveBackClassroom, ClassroomController.giveBackClassroom);

export default route;