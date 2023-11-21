import User from '../models/User';

module.exports.signup_get = (req, res) => {
    res.render('signUp');
}

module.exports.login_get = (req, res) => {
    res.render('signIn');
}

// ASYHNCRONOUS FUNCTION
module.exports.signup_post = async (req, res) => {
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

module.exports.login_post = (req, res) => {
    res.render('user-signIn');
}