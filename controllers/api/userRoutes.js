const router = require('express').Router();
const { User } = require('../../models');


router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.redirect('/');
    });

  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(409).json({ message: 'Username already taken.' });
    } else if (err.name === 'SequelizeValidationError') {
      res.status(400).json({ message: 'Password must be at least 8 characters long.' });
    } else {
      res.status(500).json(err);
    }
  }
});

// Logout route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
