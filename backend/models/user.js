'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.EnergyBill, {
        foreignKey: 'user_id',
        as: 'energyBills'
      });
    }
  }
  
  User.init({
    client_number: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  
  return User;
};
