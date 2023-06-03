const Users = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Create associations
Users.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(Users, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Users, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

Users.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

module.exports = { Users, Post, Comment };
