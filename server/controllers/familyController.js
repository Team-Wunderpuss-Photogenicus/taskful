const models = require('../sequelize/models/index');

const familyController = {};

//this controller gets all the individual history
familyController.getChore = (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const choreList = [];
    //actual sequelize query to get all chores from personal chores list in db based on user id passed in
    models.Chore.findAll({ where: { familyid: id , userid: null} })
        //async grabbing chores response from db
        .then((chore) => {
            console.log(chore);
            chore.forEach((chore_ => {
                choreList.push(chore_.dataValues);
            }))
            //store individuals chores into local to persist
            res.locals.chore = choreList;
            //invoke next middleware
            return next();
        })//end of then chain

        //catch statement for error response
        .catch((err) => {
                //return err object 
                return next({
                    log: 'Middleware error. familyController getchores',
                    message: { err: 'An err occurred' },
                });//end of error obj
        })//end of catch statement
    
};//end of getchores

//this controller adds the input chore data to the chores list database
familyController.addChore = (req, res, next) => {
    // let currentDate = new Date();
    // let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    // let cDay = currentDate.getDate();
    // let cMonth = currentDate.getMonth() + 1;
    // let cYear = currentDate.getFullYear();
    // const current = cDay + "/" + cMonth + "/" + cYear + ' ' + time;

    //sqlize method to create an entry in personal chores list of db
    models.Chore.create({

         //find the individuals chores table based on req.body.id passed in 
        // choresid: 12345,
        //add an association for individualid and choreid from req.body.choreid
        chorename: req.body.chore,

        points: req.body.points,

        priority: req.body.priority,

        userid: null,

        familyid: 1,

    })//end of create sqlize
        
        //handle success response after create method
        .then((response) => {
            res.locals.chore = response.dataValues;
            return next();
        })//end of then dealing with response

        //handle error response from create
        .catch((err) => {
            return next({
                log: 'Middleware error. familyController addchore',
                message: { err: 'An err occurred' },
            });
        })//end of catch for errors
    
}//end of addchore

//This controller deletes a chore from the db
familyController.deleteChore = (req, res, next) => {

    //sqlize query deleting doc by user id and chore id
    models.Chore.destroy({

        where: {
            _id: req.body.id,
            chore: req.body.chore,
        }//end of conditional query guideliens

    })//end of destroy method
        
        //handle destroy response from sequelize
        .then((err, chore) => {
            
            //save deleted chore in case needed later
            res.locals.chore = chore;
            //invoke next middleware
            return next();
        })//end of then chain

        //handle errors from destroy query
        .catch((err) => {
            return next({
                //return err obj
                log: 'Middleware error. familyController deletechore',
                status: 403,
                message: { err: 'An err occurred' },
            });//end of error obj
        });//end of catch
    
};//end of deletechore

module.exports = familyController;