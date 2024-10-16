'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SceeeConsumption extends Model {
    static associate(models) {
      SceeeConsumption.belongsTo(models.EnergyBill, {
        foreignKey: 'bill_id',
        as: 'energyBill'
      });
    }
  }
  
  SceeeConsumption.init({
    bill_id: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    quantity: DataTypes.DECIMAL,
    unit_price: DataTypes.DECIMAL,
    total_value: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'SceeeConsumption',
  });
  
  return SceeeConsumption;
};
