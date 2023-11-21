import {Router} from 'express';
import loginController from '../controllers/loginController.js';

const router = Router()

router.get('/signUp', loginController.signup_get);
router.post('/signUp', loginController.signup_post);
router.get('/signIn', loginController.login_get);
router.post('/signIn', loginController.login_post);