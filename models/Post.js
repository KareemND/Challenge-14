const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

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
      unique: true,
    },
    contentPost: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    datePosted: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      user_Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
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