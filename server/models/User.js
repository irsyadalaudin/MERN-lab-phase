import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true, 
        lowercase: true,
    },
    password: {
        type: String, 
        required: true,
    },
})

// STATIC REGISTER (SIGN UP) METHOD  // NYAMBUNG SAMA controllers/userControllers.js
userSchema.statics.register = async function(name, username, email, password) {
    // VALIDATION
    if (!name || !username || !email || !password) {
        throw Error('All fields must be filled!')
    }
    // if (!validator.isName(name)) {
    //     throw Error('Name must not contain symbol!')
    // }
    // if (!validator.isUniqueUsername(username)) {
    //     throw Error('Username is already axist!')
    // }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid!')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not storng enough!')
    }

    const isStrongPassword = validator.isStrongPassword(password, {
        minLength: 8,     // MINIMUM LENGTH 7 CHARACTERS
        minLowercase: 1,  // MINIMUM 1 LOWERCASE LETTER
        minUppercase: 1,  // MINIMUM 1 UPPERCASE LETTER
        minNumbers: 1,    // MINIMUM 1 NUMBER
        minSymbols: 1,    // MINIMUM 1 SYMBOL
        returnScore: false,
    })

    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use !')
    }

    // MY PASSWORD
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, username, email, password: hash })
    return user
}


// STATIC LOGIN (SIGN IN) METHOD
userSchema.statics.login = async function(identifier, password) {
    // VALIDATION
    if (!identifier || !password) {
        throw Error('All fields must be filled!')
    }

    const user = await this.findOne({ 
        $or: [
            { username: identifier },
            { email: identifier }
        ]
    })
    if (!user) {
        throw Error('Incorrect Email!')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect Password!')
    }
    return user
}


const User = mongoose.model('User', userSchema)
export default User

/*
User.create([

])
    .then(doc => {
        console.log('all users are created', doc)
    })
    .catch(err => {
        console.log('error while creating user', err)
    })
*/