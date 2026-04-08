"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Deliveries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      vendorId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      scheduledTime: Sequelize.DATE,
      status: {
        type: Sequelize.ENUM('pending', 'in_progress', 'delivered', 'cancelled'),
        defaultValue: 'pending'
      },
      notes: Sequelize.TEXT,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Deliveries');
  }
};
