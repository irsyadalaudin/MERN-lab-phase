import { Router } from 'express';
import * as loginControllers from '../controllers/loginControllers.js';

const router = Router()

router.get('/register', loginControllers.register_get);
router.post('/register', loginControllers.register_post);
router.get('/login', loginControllers.login_get);
router.post('/login', loginControllers.login_post);

export default router;