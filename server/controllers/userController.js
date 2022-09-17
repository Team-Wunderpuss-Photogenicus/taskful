const models = require('../models/sequelize');

const userController = {};

//this controller adds the input user to the database
userController.addUser = (req, res, next) => {
    //sql query string declared to add user to database

    models.Person.create({

    }, (err) => {
        //return error obj
        if (err) return next({
            log: 'Middleware error. userController addUser',
            message: { err: 'An err occurred' },
        });
        //invoke next middleware
        return next();
    });
}//end of adduser

userController.deleteUser = (req, res, next) => {
    //get user id from req

    //delete user using sql query finding id
    models.History.findOneAndDelete({date}, (err, set) => {
        if (err) {
            //return err
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