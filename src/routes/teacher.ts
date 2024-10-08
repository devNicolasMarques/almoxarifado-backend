import express from 'express';
import TeacherController from '../controller/TeacherController.ts';
import { validateRegisterTeacher } from '../middlewares/teacherMiddleware.ts';

const route = express.Router();

route.get('/', TeacherController.getAllTeachers);
route.post('/register', validateRegisterTeacher, TeacherController.registerTeacher);

export default route;