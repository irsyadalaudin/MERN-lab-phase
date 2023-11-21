module.exports.signup_get = (req, res) => {
    res.render('signUp');
}

module.exports.login_get = (req, res) => {
    res.render('signIn');
}

module.exports.signup_post = (req, res) => {
    res.render('new-signUp');
}

module.exports.signup_get = (req, res) => {
    res.render('user-signIn');
}