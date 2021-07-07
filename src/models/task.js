// 'use strict';
// const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  // task.associate = (models) => {
   
  //   task.belongsTo(models.Users, {
  //     foreignKey: 'userId',
  //     onDelete: 'CASCADE',
  //   });
  // };
  return task;
};