const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://ckndzzgl:4SLPLILSE8U6QoIosVj9vxgwrkDyxSUR@stampy.db.elephantsql.com/ckndzzgl');


async function initial() {

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

initial();

//person model for people table in starwars database
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

    createdAt: false,
    updatedAt: false,
  }
)

const Person = sequelize.models.person;

// Person.findAll({})
// .then((data)=> console.log(data))

module.exports = { Person };
