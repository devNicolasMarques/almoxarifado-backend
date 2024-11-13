import express from 'express';
import ManagerController from '../controller/ManagerController.ts';
import { validateDeleteClassroom, validateRegisterClassroom, validateUpdateClassroom } from '../middlewares/managerMiddleware.ts';

const route = express.Router();

route.get('/classroomLog', ManagerController.getClassroomLog);
route.post('/registerclassroom', validateRegisterClassroom ,ManagerController.registerClassroom);
route.put('/updateclassroom', validateUpdateClassroom ,ManagerController.updateClassroom);
route.post('/deleteclassroom', validateDeleteClassroom, ManagerController.deleteClassroom)

export default route;