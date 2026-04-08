"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Vendor, { foreignKey: "userId" });
      this.hasMany(models.Event, { foreignKey: "userId" });
      this.hasMany(models.Delivery, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "team", "vendor"),
        defaultValue: "team",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
