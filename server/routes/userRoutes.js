import express from 'express'
import { loginUser, registerUser } from '../controllers/userControllers.js'
const router = express.Router()

// LOGIN ROUTE
router.post('/login', loginUser)

// REGISTER ROUTE
router.post('/register', registerUser)

export default router