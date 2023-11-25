import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
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

const User = mongoose.model('User', userSchema);
export default User;

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