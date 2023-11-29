// server/routes/userRoutes.js
import express from 'express';
import { loginUser, registerUser } from '../controllers/userControllers.js';
import { userAuth } from '../middlewares/userAuth.js';
import User from '../models/User.js';

const router = express.Router();

<<<<<<< HEAD
// Rute yang memerlukan otentikasi pengguna
router.get('/profile', userAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.status(200).json({
            username: user.username,
            email: user.email,
            name: user.name,
        });
=======
router.get('/login', async (req, res) => {
    // const { query } = req.query

    try {
        const users = await User.find({ }, { password: 0 })
        const signedUsers = users.map(user => ({
            name: user.name,
            username: user.username,
            email: user.email,
        }))
        res.status(201).json(signedUsers)
>>>>>>> e1c1fcaa008104b694ba891be0c4fafbaaa40785
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// router.get('/register', async (req, res) => {
//     // const { query } = req.query
//     try {
//         const users = await User.find({ })
//         res.status(204).json(users)
//     } catch (err) {
//         res.status(404).json({ message: err.message })
//     }
// })
router.get('/register', async (req, res) => {
<<<<<<< HEAD
=======

>>>>>>> e1c1fcaa008104b694ba891be0c4fafbaaa40785
    try {
        // Mengambil data user tanpa password
        const users = await User.find({}, { password: 0 })

        // Mengembalikan data user dengan format yang diinginkan
        const registeredUsers = users.map(user => ({
            name: user.name,
            username: user.username,
            email: user.email,
        }))

        res.status(201).json(registeredUsers)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

// Rute login dan register
router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;


/* CARA MENGGUNAKAN ROUTER DI POSTMAN:
1) nyalain server di terminal:   npm run start
2) masuk ke postman, pilih method post, pilih endpoint user/register
3) pastikan memilih body, pilih raw, pilih json, pilih tambahkan data yang ingin dikirimkan
4) masukkan username dan password yang sesuai
*/