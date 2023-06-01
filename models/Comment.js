const { Model, DataTypes } = require("sequelize");

const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      commentText: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      dateCommented: {
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
        post_Id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'post',
              key: 'id',
            },
        },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'comments',
  }
);

module.exports = Comments;