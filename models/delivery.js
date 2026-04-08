"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Delivery extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Delivery.init(
    {
      vendorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      scheduledTime: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM("pending", "in_progress", "delivered", "cancelled"),
        defaultValue: "pending",
      },
      notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Delivery",
    }
  );
  return Delivery;
};
