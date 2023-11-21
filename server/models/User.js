import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 6},
})

const User = mongoose.model('User', userSchema);
export default User;

/*
User.create([
    {
        idUser: '1',
        email: 'jokoSaptanto123@gmail.com',
        userName: 'Joko123',
        password: '789456'
    }
])
    .then(doc => {
        console.log('all users are created', doc)
    })
    .catch(err => {
        console.log('error while creating user', err)
    })
*/