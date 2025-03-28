import express from 'express';
import {
  createVerification,
  getVerificationById,
  deleteVerification
} from '../Controllers/VerifiicationController.js';

const router = express.Router();

router.post('/', createVerification);
router.get('/:id', getVerificationById);
router.delete('/:id', deleteVerification);

export default router;