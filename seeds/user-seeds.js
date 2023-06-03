const { Users } = require('../models');

const userData = [
    {
        "username": "testUser1",
        "password": "password123"
    },
    {
        "username": "testUser2",
        "password": "password123"
    },
    {
        "username": "testUser3",
        "password": "password123"
    }
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
