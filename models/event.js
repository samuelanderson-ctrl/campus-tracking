"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Event.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      location: DataTypes.STRING,
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      attendees: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
