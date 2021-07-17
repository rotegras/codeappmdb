const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/users');



const LoginStrategy = new Strategy(
  {
    passReqToCallback: true,
  },
  function(req, username, password, done) {

    const email = req.body.email;

    User.findOne({email}).lean().exec((err, user) => {
      console.log(user);
      if (err) {
        return done(err, null);
      }
      if (!user) {
        return done('No User found', null);
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        return done('Email or Password not valid');
      }
      console.log(user);
      return done(null, user)
    });
  }
);


module.exports = LoginStrategy;
