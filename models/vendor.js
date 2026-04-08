"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Vendor.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactName: DataTypes.STRING,
      contactEmail: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
      },
      phone: DataTypes.STRING,
      serviceDescription: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Vendor",
    }
  );
  return Vendor;
};
