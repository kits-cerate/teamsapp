'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventsModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  eventsModel.init({
    groupid: DataTypes.STRING,
    eventname: DataTypes.STRING,
    startdatetime: DataTypes.STRING,
    enddatetime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'eventsModel',
  });
  return eventsModel;
};