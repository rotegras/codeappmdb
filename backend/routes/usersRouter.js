const express = require('express');
const router = express.Router();
const passport = require('../passportAuthentication/index.js');


router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/success',
  failureRedirect: '/notfound',
  session: false
}));

router.post('/signin', function(req, res, next) {
  res.send('respond with a resource');
});


// export default router;
module.exports = router;
