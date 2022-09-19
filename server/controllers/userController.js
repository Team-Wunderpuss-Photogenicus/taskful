const { User } = require('../sequelize/models/index');

const userController = {};

userController.login = async (req, res, next) => {
    try {
        const [user, created] = await User.findOrCreate({
            where: { googleid: req.body.userId },
            defaults: { googleid: req.body.userId, familyid: 1}
        });
        res.locals.googleId = req.body.userId;
        res.locals.userId = user.dataValues.id;
        res.locals.userInfo = user.dataValues;
    }catch (err) {
        //handle error response from create
        return next({
            log: 'Middleware error. usercontroller.login',
            message: { err: 'An err occurred' },
        });
    }
    return next();
}


userController.checkCookie = async (req, res, next) => {
    try {
        const userId = await User.findOne({ where: { id: req.cookies.userId }})
        res.locals.userInfo = userId.dataValues;
    }catch (err) {
        return next({
            log: 'Middleware error. userController.checkCookie',
            message: { err: 'An err occurred' },
        });
    }
    return next();
}

module.exports = userController;