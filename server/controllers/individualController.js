const models = require('../sequelize/models/index');

const individualController = {};

//this controller gets all the individual history
individualController.getChores = async(req, res, next) => {

    //actual sequelize query to get all chores from personal chores list in db based on user id passed in
    try {
        const { userId } = req.cookies;
        const dbRes = await models.Chore.findAll({ where: { userid: userId } })
            //async grabbing chores response from db
            console.log(dbRes[0].dataValues);
                //store individuals chores into local to persist
                res.locals.chores = dbRes[0].dataValues;
                //invoke next middleware
    }
    //catch statement for error response
    catch (err) {
        ((err) => {
            //return err object 
            return next({
                log: 'Middleware error. individualController getchores',
                message: { err: 'An err occurred' },
            });//end of error obj
        })//end of catch statement
    }
    return next();
};//end of getchores

//this should update a chore to userId
individualController.addChore = async (req, res, next) => {
    // let currentDate = new Date();
    // let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    // let cDay = currentDate.getDate();
    // let cMonth = currentDate.getMonth() + 1;
    // let cYear = currentDate.getFullYear();
    // const current = cDay + "/" + cMonth + "/" + cYear + ' ' + time;
    //sqlize method to create an entry in personal chores list of db\
    try {
        const { userId } = req.cookies;
        const { choreName, points, priority } = req.body;
        const dbRes = await models.Chore.create({
            //find the individuals chores table based on req.body.id passed in 
            // id: 12345,
            //add an association for individualid and choreid from req.body.choreid
            chorename: choreName,
            
            points: points,
            
            priority: priority,
            
            userid: userId,
            
            familyid: 1,
            
        })//end of create sqlize
   
        console.log(dbRes);
        return next();
    }
    catch (err) {
        //handle error response from create
        return next({
            log: 'Middleware error. individualController addchore',
            message: { err: 'An err occurred' },
        });
//end of catch for errors
    }
    
}//end of addchore

//This controller deletes a chore from the db
individualController.deleteChore = (req, res, next) => {
    const { id } = req.params;
    //sqlize query deleting doc by user id and chore id
    models.Chore.destroy({
        where: {
            _id: id,
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
                log: 'Middleware error. individualController deletechore',
                status: 403,
                message: { err: 'An err occurred' },
            });//end of error obj
        });//end of catch
};//end of deletechore

module.exports = individualController;