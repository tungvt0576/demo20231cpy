'use strict';
import Model from "sequelize";
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('user',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING(45),
  })
  return Role;
};