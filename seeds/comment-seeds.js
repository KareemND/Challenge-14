const { Comment } = require('../models');

const commentData = [
    {
        "commentText": "First comment",
        "user_Id": 1,
        "post_Id": 1
    },
    {
        "commentText": "Second comment",
        "user_Id": 2,
        "post_Id": 1
    },
    {
        "commentText": "Third comment",
        "user_Id": 3,
        "post_Id": 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
