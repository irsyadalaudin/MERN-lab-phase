import User from '../models/User.js'
import jwt from 'jsonwebtoken'

// JWT
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
}

// LOGIN USER
export const loginUser = async (req, res) => {
    res.json({message: 'login user'})
}

// REGISTER USER  // NYAMBUNG SAMA models/User.js
export const registerUser = async (req, res) => {
    const { name, username, email, password } = req.body

    try {
        const user = await User.register(name, username, email, password)

        // CREATE A TOKEN
        const token = createToken(user._id)

        // res.status(200).json({ name, username, email, user })              // INI HARUS DITULIS SEMUANYA 
        res.status(200).json({ name, username, email, token })
    } catch (err) {
        // res.status(400).json({ message: 'error', err })
        res.status(400).json({ message: err.message })
    }
}

export default { loginUser, registerUser }