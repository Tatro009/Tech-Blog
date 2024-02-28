// Import necessary modules
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const sequelize = require('../config/connection');

// Define associations between models
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

// Export models and sequelize
module.exports = { User, Post, Comment, sequelize };
