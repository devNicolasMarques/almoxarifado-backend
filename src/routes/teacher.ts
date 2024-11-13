import express from 'express';
import TeacherController from '../controller/TeacherController.ts';
import { validateRegisterTeacher, validateUpdateTeacher, validateDeleteTeacher} from '../middlewares/teacherMiddleware.ts';

const route = express.Router();

route.get('/', TeacherController.getAllTeachers);
route.post('/register', validateRegisterTeacher, TeacherController.registerTeacher);
route.put('/update', validateUpdateTeacher, TeacherController.updateTeacher);
route.post('/delete', validateDeleteTeacher, TeacherController.deleteTeacher);

export default route;