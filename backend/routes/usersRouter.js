const express = require('express');
const router = express.Router();
const passport = require('../passportAuthentication');


// manages the calls on authentication path

router.post('/signup', (req, res, next) => {
  passport.authenticate('local-signup', function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: 'Oooops, something went wrong',
        error: error || 'Something went wrong'
      });
    }

    return res.json( user );
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local-login', function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: 'Oooops, something went wrong',
        error: error || 'Something went wrong'
      });
    }

    return res.json( user );
  })(req, res, next);
});

// export default router;
module.exports = router;
