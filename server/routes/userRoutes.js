import express from 'express'
import { loginUser, registerUser } from '../controllers/userControllers.js'
import User from '../models/User.js'
const router = express.Router()

// LOGIN ROUTE
router.post('/login', loginUser)

router.get('/login', async (req, res) => {
    const { query } = req.query
    try {
        const users = await User.findOne({ })
        res.status(204).json(users)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

// REGISTER ROUTE
router.post('/register', registerUser)

router.get('/register', async (req, res) => {
    const { query } = req.query
    try {
        const users = await User.find({ })
        res.status(204).json(users)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

export default router

/* CARA MENGGUNAKAN ROUTER DI POSTMAN:
1) nyalain server di terminal:   npm run start
2) masuk ke postman, pilih method post, pilih endpoint user/register
3) pastikan memilih body, pilih raw, pilih json, pilih tambahkan data yang ingin dikirimkan
4) masukkan username dan password yang sesuai
*/