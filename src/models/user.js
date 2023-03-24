'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user',{
    ID_User: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    ID_Role: DataTypes.INTEGER,
    fullname: DataTypes.STRING(45),
    email: DataTypes.STRING(45),
    password: DataTypes.STRING(45)
  })
  return User;
};