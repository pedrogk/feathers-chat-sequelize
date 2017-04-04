'use strict';

// message-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const message = sequelize.define('messages', {
    text: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    // Sequelize-demo: Define association to user so that it creates userId column as a foreign key.
    classMethods: {
      associate(models) {
        // Sequelize-demo: Note that the model is 'users' not 'user' because that is how we defined it in sequelize.
        message.belongsTo(models.users);
      }
    }
  });

  // Sequelize-demo: Note that sync() was removed because we do it in services/index.js in order to define associations before sync.

  return message;
};
