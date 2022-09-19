const models = require('../sequelize/models/index');

const userController = {};

//this controller adds the input user to the database
userController.addUser = (req, res, next) => {

    //create user with passed in id
    models.User.create({

        //create user with id passed in from body
        userid: req.body.id,
        //assign a unique chores list 
        user_chore_list_id: req.body.id,

    })//end of user create
        
        //handle successful return
        .then((user) => {
            res.locals.user = user;
            //invoke next middleware
            return next();
        })//end of then

        //handle any errors from query
        .catch((err) => {
        //return error obj
        if (err) return next({
            log: 'Middleware error. userController addUser',
            message: { err: 'An err occurred' },
        });//end of return err obj
        });//end of catch statement
    
}//end of adduser

userController.deleteUser = (req, res, next) => {
    //get user id from req

    //delete user using sql query finding id
    models.User.destroy({ where: { userid: req.body.id } })
        
        //handle success
        .then((user) => {
            //return deleted user for future needs
            res.locals.user = user;
            //invoke next middleware
            return next();
        })

        //handle error
        .catch((err) => {
            //return err
            return next({
                log: 'Middleware error. choresController deletechore',
                status: 403,
                message: { err: 'An err occurred' },
            });//end of err obj
        });//end of catch
    
};//end of deleteuser method

module.exports = userController;