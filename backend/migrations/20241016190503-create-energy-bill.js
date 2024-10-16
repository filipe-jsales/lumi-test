'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EnergyBills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      reference_month: {
        type: Sequelize.STRING
      },
      electricity_kwh: {
        type: Sequelize.DECIMAL
      },
      electricity_value: {
        type: Sequelize.DECIMAL
      },
      sceee_kwh: {
        type: Sequelize.DECIMAL
      },
      sceee_value: {
        type: Sequelize.DECIMAL
      },
      compensated_gdi_kwh: {
        type: Sequelize.DECIMAL
      },
      compensated_gdi_value: {
        type: Sequelize.DECIMAL
      },
      public_lighting_contribution: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EnergyBills');
  }
};