import User from '../models/User.js';

export const signup_get = (req, res) => {
    res.render('signUp');
}

export const login_get = (req, res) => {
    res.render('signIn');
}

// ASYHNCRONOUS FUNCTION
export const signup_post = async (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    res.send('user login');
    
    try {
        const user = await User.create({email, password});
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(400).json({err: 'user not created'});
    }
}

export const login_post = (req, res) => {
    res.render('user-signIn');
}