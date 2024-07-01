import { Router } from 'express';
// import { getAllStudents, getStudentById } from '../service/students.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/student.js';
import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  getStudentByIdController,
  getStudentsController,
  createStudentController,
  deleteStudentController,
  upsertStudentController,
  patchStudentController,
} from '../controllers/students.js';
// import { isValidId } from '../middlewares/isValidId.js';
const router = Router();
router.get('/students', ctrlWrapper(getStudentsController));
router.get(
  '/students/:studentId',
  // isValidId(),
  ctrlWrapper(getStudentByIdController),
);
router.post(
  '/students',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);
router.delete('/students/:studentId', ctrlWrapper(deleteStudentController));
router.put(
  '/students/:studentId',
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);
router.patch(
  '/students/:studentId',
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);
export default router;
