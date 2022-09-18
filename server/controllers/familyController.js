const models = require('../sequelize/sequelize');

const familyController = {};

//this controller gets all the family history
familyController.getChore = (req, res, next) => {
    //sql query to find all family
    models.History.find({}, (err, chores) => {
        if (err) {
            //return err object 
            return next({
                log: 'Middleware error. familyController getchores',
                message: { err: 'An err occurred' },
            });
        }
        //save all returned family to locals
        res.locals.chores = chores;
        //invoke next middleware
        return next();
    });
};

//this controller adds the input chore data to the database
familyController.addChore = (req, res, next) => {
    //get the current date and time and assign to current
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    const current = cDay + "/" + cMonth + "/" + cYear + ' ' + time;
    //sql query to add chore to family list in db
    models.History.create({
        //add chore details 
        //link family id to chore

    }, (err) => {
        if (err) return next({
            //return err object
            log: 'Middleware error. familyController addchore',
            message: { err: 'An err occurred' },
        });
        //invoke next middleware
        return next();
    });
}//end of addchore

//This controller deletes a chore from the db
familyController.deleteChore = (req, res, next) => {
    //find chore based on id
    models.History.findOneAndDelete({date}, (err, set) => {
        if (err) {
            return next({
                log: 'Middleware error. familyController deletechore',
                status: 403,
                message: { err: 'An err occurred' },
            });
        };

        if (!set) return next ({
          log: 'Middleware error. familycontroller.deletechore',
          status: 404,
          message: { err: 'Set not found' },
        });

        res.locals.set = set;
        return next();
    });
};

module.exports = choresController;