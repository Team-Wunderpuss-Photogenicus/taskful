//required properties from module sequelize
const { Sequelize, DataTypes } = require('sequelize');

//initializing sequelize and postgres connection to db
const sequelize = new Sequelize('postgres://ckndzzgl:4SLPLILSE8U6QoIosVj9vxgwrkDyxSUR@stampy.db.elephantsql.com/ckndzzgl');

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

//test person model for people table in starwars database
const person = sequelize.define('person', {
  _id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mass: {
    type: DataTypes.NUMBER,
  },
  hair_color: {
    type: DataTypes.STRING,
  },
  skin_color: {
    type: DataTypes.STRING,
  },
  eye_color: {
    type: DataTypes.STRING,
  },
  birth_year: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  species_id: {
    type: DataTypes.NUMBER,
  },
  homeworld_id: {
    type: DataTypes.NUMBER,
  },
  height: {
    type: DataTypes.NUMBER,
  },
},
  {
    //in starwars no createdat or updatedat which is default added with sqlize so false makes it so that queries dont search or add or utilize these properties for documents
    createdAt: false,
    updatedAt: false,
  }
)

//creating property name for model to export
const Person = sequelize.models.person;

// Person.findAll({})
// .then((data)=> console.log(data))

module.exports = { Person };
