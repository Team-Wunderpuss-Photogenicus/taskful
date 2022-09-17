const { Sequelize } = require('sequelize'); 
const sequelize = new Sequelize('postgres://gbufjhvv:StVQaAvuDFTjVN2IsIeoY5H9oS_2CtbF@jelani.db.elephantsql.com/gbufjhvv');

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
}
catch (error) {
    console.error('Unable to connect to database', error);
}
