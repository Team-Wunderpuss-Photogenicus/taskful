const { Sequelize } = require('sequelize'); 
const sequelize = new Sequelize('postgres://gbufjhvv:StVQaAvuDFTjVN2IsIeoY5H9oS_2CtbF@jelani.db.elephantsql.com/gbufjhvv', {
    dialect: 'postgres'
});




/*
//this function checks if we make connection to our elephantSQL database;
  //if it does, we can comment it out, not necessary to keep after we confirm connection;
async function sequelizeFunction() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
  }
  catch (err) {
    console.error('Unable to connect to database', err);
  }
}

sequelizeFunction();
*/

sequelize.authenticate().then(() => {
  console.log("Connection Successful!");
}).catch((err) => {
  console.log("Error connecting to database!")
});

console.log("another task");