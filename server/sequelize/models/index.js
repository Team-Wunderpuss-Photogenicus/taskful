//required properties from module sequelize
const { Sequelize, DataTypes } = require('sequelize');

//initializing sequelize and postgres connection to db
const sequelize = new Sequelize('postgres://gbufjhvv:StVQaAvuDFTjVN2IsIeoY5H9oS_2CtbF@jelani.db.elephantsql.com/gbufjhvv');

//test function to connect to db
async function initial() {

  try {
    //calling async connection to db
    await sequelize.authenticate();
    //if successful
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

//checking for successful connection response
initial();

//test user model for user table in taskful database
const users = sequelize.define('users', {
  userid: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  familyid: {
    type: DataTypes.NUMBER,
  },
  user_chore_list_id: {
    type: DataTypes.NUMBER,
  },
  adminaccess: {
    type: DataTypes.BOOLEAN,
  }
},
  {
    createdAt: false,
    updatedAt: false,
  }
)

//test user_chore_list model for user_chore_list table in taskful database
const user_chore_list = sequelize.define('user_chore_list', {
  user_chore_list_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
  },
  choresid: {
    type: DataTypes.NUMBER,
    allowNull: false,
  }
},
  {
    createdAt: false,
    updatedAt: false,
  }
)

//test family model for family table in taskful database
const family = sequelize.define('family', {
  familyid: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  family_chore_list_id: {
    type: DataTypes.NUMBER,
  }
},
  {
    createdAt: false,
    updatedAt: false,
  }
)

//test family_chore_list model for family_chore_list table in taskful database
const family_chore_list = sequelize.define('family_chore_list', {
  family_chore_list_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
  },
  choresid: {
    type: DataTypes.NUMBER,
    allowNull: false,
  }
},
  {
    createdAt: false,
    updatedAt: false,
  }
)

//test chores model for chores table in taskful database
const chores = sequelize.define('chores', {
  choreid: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
  },
  choresname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  points: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  priority: {
    type: DataTypes.NUMBER,
    allowNull: false,
  }
},
  {
    createdAt: false,
    updatedAt: false,
  }
)

//creating property name for model to export
const Users = sequelize.models.users;
const User_chore_list = sequelize.model.user_chore_list;
const Family = sequelize.model.family;
const Family_chore_list = sequelize.model.family_chore_list;
const Chores = sequelize.model.chores;

// Person.findAll({})
// .then((data)=> console.log(data))

module.exports = { Users, User_chore_list, Family, Family_chore_list, Chores };
