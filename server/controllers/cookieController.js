const cookieController = {};

cookieController.setUserCookie = (req, res, next) => {
    //save the cookie here
    res.cookie('userId', res.locals.userId, { httpOnly: true})
    next();
}

module.exports = cookieController;