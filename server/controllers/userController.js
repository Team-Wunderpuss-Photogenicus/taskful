const models = require('../models/choresModels');

const userController = {};

//this controller adds the input a user to the database
userController.addUser = (req, res, next) => {
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    const current = cDay + "/" + cMonth + "/" + cYear + ' ' + time;
    models.History.create({

    }, (err) => {
        if (err) return next({
            log: 'Middleware error. userController addUser',
            message: { err: 'An err occurred' },
        });
        return next();
    });
}//end of adduser

userController.deleteUser = (req, res, next) => {
    const date = req.body.date;
    models.History.findOneAndDelete({date}, (err, set) => {
        if (err) {
            return next({
                log: 'Middleware error. choresController deletechore',
                status: 403,
                message: { err: 'An err occurred' },
            });
        };

        if (!set) return next ({
          log: 'Middleware error. chorescontroller.deletechore',
          status: 404,
          message: { err: 'Set not found' },
        });

        res.locals.set = set;
        return next();
    });
};

module.exports = userController;