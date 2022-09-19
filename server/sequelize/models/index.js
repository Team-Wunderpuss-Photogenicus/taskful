//required properties from module sequelize
const { Sequelize, DataTypes } = require('sequelize');

//initializing sequelize and postgres connection to db
const sequelize = new Sequelize('postgres://fcyszrjv:fCW3D8cnjbTGKLBeRwgLxHHjMz1FBA1m@jelani.db.elephantsql.com/fcyszrjv');

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
const user = sequelize.define('user', {
  googleid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  familyid: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  // user_chore_list_id: {
  //   type: DataTypes.BIGINT,
  // },
  // adminaccess: {
  //   type: DataTypes.BOOLEAN,
  // }
}, 
  {
    createdAt: false,
    updatedAt: false,
  }
);

//test user_chore_list model for user_chore_list table in taskful database
// const user_chore_list = sequelize.define('user_chore_list', {
//   user_chore_list_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//     primaryKey: true,
//   },
//   choresid: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   }
// },
//   {
//     createdAt: false,
//     updatedAt: false,
//   }
// )

//test family model for family table in taskful database
const family = sequelize.define('family', {
  familyid: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  // family_chore_list_id: {
  //   type: DataTypes.BIGINT,
  // }
},
  // {
  //   createdAt: false,
  //   updatedAt: false,
  // }
)

//test family_chore_list model for family_chore_list table in taskful database
// const family_chore_list = sequelize.define('family_chore_list', {
//   family_chore_list_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//     primaryKey: true,
//   },
//   choresid: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   }
// },
//   {
//     createdAt: false,
//     updatedAt: false,
//   }
// )

//test chores model for chores table in taskful database
const chore = sequelize.define('chore', {
  chorename: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  points: {
    type: DataTypes.INTEGER,
    // allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    // allowNull: false,
  },
  userid: {
    type: DataTypes.BIGINT
  },
  familyid: {
    type: DataTypes.INTEGER
  },
},
// {
// createdAt: false,
// updatedAt: false,
// },

)

//creating property name for model to export
const User = sequelize.models.user;
// const User_chore_list = sequelize.model.user_chore_list;
const Family = sequelize.models.family;
// const Family_chore_list = sequelize.model.family_chore_list;
const Chore = sequelize.models.chore;


module.exports = { User, Family, Chore };
