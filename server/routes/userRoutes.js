import express from 'express'
import { loginUser, registerUser } from '../controllers/userControllers.js'
import User from '../models/User.js'
const router = express.Router()

// LOGIN ROUTE
router.post('/login', loginUser)

// REGISTER ROUTE
router.post('/register', registerUser)

router.get('/register', async (req, res) => {
    const { query } = req.query;

    try {
        // You can customize the search logic based on your requirements
        const users = await User.find({ });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router

/* CARA MENGGUNAKAN ROUTER DI POSTMAN:
1) nyalain server di terminal:   npm run start
2) masuk ke postman, pilih method post, pilih endpoint user/register
3) pastikan memilih body, pilih raw, pilih json, pilih tambahkan data yang ingin dikirimkan
4) masukkan username dan password yang sesuai
*/