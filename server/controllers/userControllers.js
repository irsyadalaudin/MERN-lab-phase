import User from '../models/User.js'
import jwt from 'jsonwebtoken'

// JWT
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
}

// LOGIN USER
export const loginUser = async (req, res) => {
    const { identifier, password } = req.body

    try {
        const user = await User.login(identifier, password)

        // CREATE A JWT TOKEN
        const token = createToken(user._id)

        // THESE ARE ALL REQUIRED { identifier, email, token }, AND MUST BE WRITTEN DOWN
        res.status(200).json({ username: user.username, email: user.email, token })
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
}

// REGISTER USER  // NYAMBUNG SAMA models/User.js
export const registerUser = async (req, res) => {
    const { name, username, email, password } = req.body

    try {
        const user = await User.register(name, username, email, password)

        // CREATE A JWT TOKEN
        const token = createToken(user._id)

        // THESE ARE ALL REQUIRED { name, username, email, token }, AND MUST BE WRITTEN DOWN
        res.status(200).json({ name, username, email, token })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export default { loginUser, registerUser }