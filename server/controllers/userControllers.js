import User from '../models/User.js'

// LOGIN USER
export const loginUser = async (req, res) => {
    res.json({message: 'login user'})
}

// REGISTER USER  // NYAMBUNG SAMA models/User.js
export const registerUser = async (req, res) => {
    const { name, username, email, password } = req.body

    try {
        const user = await User.register(name, username, email, password)
        res.status(200).json({ name, username, email, user })              // INI HARUS DITULIS SEMUANYA 
    } catch (err) {
        res.status(400).json({ message: 'error', err })
    }
}

export default { loginUser, registerUser }