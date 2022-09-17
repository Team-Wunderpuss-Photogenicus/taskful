const models = require('../models/choresModels');

const choresController = {};

//this controller gets all the chores history
choresController.getChore = (req, res, next) => {
    //sql query to find all chores
    models.History.find({}, (err, histories) => {
        if (err) {
            //return err object 
            return next({
                log: 'Middleware error. choresController getChores',
                message: { err: 'An err occurred' },
            });
        }
        //save all returned chores to locals
        res.locals.histories = histories;
        //invoke next middleware
        return next();
    });
};

//this controller adds the input chore data to the database
choresController.addChore = (req, res, next) => {
    //get the current date and time and assign to current
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    const current = cDay + "/" + cMonth + "/" + cYear + ' ' + time;
    //sql query to add chores to db
    models.History.create({

    }, (err) => {
        if (err) return next({
            //return err object
            log: 'Middleware error. choresController addChores',
            message: { err: 'An err occurred' },
        });
        //invoke next middleware
        return next();
    });
}//end of addchore

//This controller deletes a chore from the db
choresController.deleteChore = (req, res, next) => {
    //find chore based on id
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

module.exports = choresController;