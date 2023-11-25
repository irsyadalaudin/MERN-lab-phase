import express from 'express'
import { loginUser, registerUser } from '../controllers/userControllers.js'
const router = express.Router()

// LOGIN ROUTE
router.post('/login', loginUser)

// REGISTER ROUTE
router.post('/register', registerUser)

export default router

/* CARA MENGGUNAKAN ROUTER DI POSTMAN:
1) nyalain server di terminal:   npm run start
2) masuk ke postman, pilih method post, pilih endpoint users/login
3) pastikan memilih body, pilih raw, pilih json, pilih tambahkan data yang ingin dikirimkan
4) masukkan username dan password yang sesuai
*/