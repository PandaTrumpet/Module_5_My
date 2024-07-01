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
router.get('/', ctrlWrapper(getStudentsController));
router.get(
  '/:studentId',
  // isValidId(),
  ctrlWrapper(getStudentByIdController),
);
router.post(
  '/',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

router.delete('/:studentId', ctrlWrapper(deleteStudentController));
router.put(
  '/:studentId',
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);
router.patch(
  '/:studentId',
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);
export default router;
