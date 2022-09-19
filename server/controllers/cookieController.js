const cookieController = {};

cookieController.setUserCookie = (req, res, next) => {
    //save the cookie here
    res.cookie('userId', req.body.userId, { httpOnly: true})
    next();
}

module.exports = cookieController;