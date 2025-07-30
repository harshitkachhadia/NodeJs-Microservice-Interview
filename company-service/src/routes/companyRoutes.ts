import express from 'express';
import {
    getCompany,
    getCompanyById,
    createCompany
} from '../controllers/companyController'

const router = express.Router();

router.get('/',getCompany);
router.get('/:id',getCompanyById);
router.post('/',createCompany);

export default router;