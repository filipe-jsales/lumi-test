'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompensatedGdiConsumption extends Model {
    static associate(models) {
      CompensatedGdiConsumption.belongsTo(models.EnergyBill, {
        foreignKey: 'bill_id',
        as: 'energyBill'
      });
    }
  }
  
  CompensatedGdiConsumption.init({
    bill_id: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    quantity: DataTypes.DECIMAL,
    unit_price: DataTypes.DECIMAL,
    total_value: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'CompensatedGdiConsumption',
  });
  
  return CompensatedGdiConsumption;
};
