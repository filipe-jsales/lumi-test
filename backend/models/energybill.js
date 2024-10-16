'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnergyBill extends Model {
    static associate(models) {
      EnergyBill.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });

      EnergyBill.hasMany(models.ElectricityConsumption, {
        foreignKey: 'bill_id',
        as: 'electricityConsumptions'
      });

      EnergyBill.hasMany(models.SceeeConsumption, {
        foreignKey: 'bill_id',
        as: 'sceeeConsumptions'
      });

      EnergyBill.hasMany(models.CompensatedGdiConsumption, {
        foreignKey: 'bill_id',
        as: 'compensatedGdiConsumptions'
      });
    }
  }
  
  EnergyBill.init({
    user_id: DataTypes.INTEGER,
    reference_month: DataTypes.STRING,
    electricity_kwh: DataTypes.DECIMAL,
    electricity_value: DataTypes.DECIMAL,
    sceee_kwh: DataTypes.DECIMAL,
    sceee_value: DataTypes.DECIMAL,
    compensated_gdi_kwh: DataTypes.DECIMAL,
    compensated_gdi_value: DataTypes.DECIMAL,
    public_lighting_contribution: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'EnergyBill',
  });
  
  return EnergyBill;
};
