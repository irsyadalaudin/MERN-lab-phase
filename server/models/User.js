import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 6},
})

const User = mongoose.model('User', userSchema);
export default User;