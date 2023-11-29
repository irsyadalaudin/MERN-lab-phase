// server/routes/userRoutes.js
import express from 'express';
import { loginUser, registerUser } from '../controllers/userControllers.js'
import { userAuth } from '../middlewares/userAuth.js'
import User from '../models/User.js'

const router = express.Router();

// GET LOGIN AND REGISTER ROUTE
// ROUTES THAT REQUIRE USER AUTHENTICATION
router.get('/login', userAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        const signedUsers = user.map(user => ({
            username: user.username,
            email: user.email,
            name: user.name,
        }))
        res.status(201).json(signedUsers)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
});

router.get('/register', async (req, res) => {
    try {
        // RETRIEVE USER DATA WITHOUT PASSWORD
        const users = await User.find({}, { password: 0 })

        // RETURNS USER DATA IN THE DESIRED FORMAT
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

// POST LOGIN AND REGISTER ROUTE
router.post('/login', loginUser)
router.post('/register', registerUser)

export default router;


/* HOW TO USE A ROUTER IN POSTMAN:
1) start the server in the terminal: npm run start
2) enter postman, select method post, select endpoint user/register
3) make sure to select body, select raw, select json, select add the data you want to send
4) enter the appropriate username and password
*/