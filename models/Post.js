const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

  Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    titlePost: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    contentPost: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    datePosted: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;