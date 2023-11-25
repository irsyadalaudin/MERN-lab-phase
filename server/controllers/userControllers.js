import User from '../models/User.js'

// LOGIN USER
export const loginUser = async (req, res) => {
    res.json({message: 'login user'})
}

// REGISTER USER
export const registerUser = async (req, res) => {
    res.json({message: 'register user'})
}

export default { loginUser, registerUser }