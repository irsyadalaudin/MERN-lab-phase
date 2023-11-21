import {Router} from 'express';
import loginControllers from '../controllers/loginControllers.js';

const router = Router()

router.get('/signUp', loginControllers.signup_get);
router.post('/signUp', loginControllers.signup_post);
router.get('/signIn', loginControllers.login_get);
router.post('/signIn', loginControllers.login_post);