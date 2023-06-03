const { Post } = require('../models');

const postData = [
    {
        "titlePost": "First Post",
        "contentPost": "This is the first post content",
        "user_Id": 1
    },
    {
        "titlePost": "Second Post",
        "contentPost": "This is the second post content",
        "user_Id": 2
    },
    {
        "titlePost": "Third Post",
        "contentPost": "This is the third post content",
        "user_Id": 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
