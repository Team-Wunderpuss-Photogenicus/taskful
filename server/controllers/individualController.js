const models = require('../sequelize/models/index');

const individualController = {};

//this controller gets all the individual history
individualController.getChores = (req, res, next) => {
    //declare id for individual from params 

    //actual sql qeuery
    models.Person.findOne({ where: { name: 'sam' } })
        .then((person) => {
        // if (err) {
        //     //return err object 
        //     return next({
        //         log: 'Middleware error. individualController getchores',
        //         message: { err: 'An err occurred' },
        //     });
        // }
        //store individuals chores into local to persist
        res.locals.person = person.dataValues;
        //invoke next middleware
        return next();
    });
};

//this controller adds the input chore data to the database
individualController.addChore = (req, res, next) => {
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    const current = cDay + "/" + cMonth + "/" + cYear + ' ' + time;

    //sql querystring to find all chores based on individual id

    //actual sql euery
    models.History.create({
        //find the individuals chores table based on req.body.id passed in 
        //add an association for individualid and choreid from req.body.choreid

    }, (err) => {
        //return err object
        if (err) return next({
            log: 'Middleware error. individualController addchore',
            message: { err: 'An err occurred' },
        });
        //invoke next middleware
        return next();
    });
}//end of addchore

//This controller deletes a chore from the db
individualController.deleteChore = (req, res, next) => {
    //declare the user id from req.body
    //declare chore id from req.body

    //sql query deleting doc by user id and chore id
    models.History.findOneAndDelete({date}, (err, chore) => {
        if (err) {
            return next({
                //return err obj
                log: 'Middleware error. individualController deletechore',
                status: 403,
                message: { err: 'An err occurred' },
            });
        };

        //save deleted chore in case needed later
        res.locals.chore = chore;
        //invoke next middleware
        return next();
    });
};

module.exports = individualController;