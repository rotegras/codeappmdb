const Strategy = require('passport-local').Strategy;
const User = require('../models/users');
const bcryptjs = require('bcryptjs');
const salt = bcryptjs.genSaltSync(10);


const SignupStrategy = new Strategy(
  {
    passReqToCallback: true,
    // usernamefield: 'email'
  },
  function(req, username, password, done) {
    // another version could be
    // function(req, email, password, done) {
    // when passing email as usernamefield, but then return usermail as email
    // in postman response

    const email = req.body.email;

    User.findOne({email}).lean().exec((err, user) => {
      console.log('User: ', user);
      if (err) {
        return done(err, null);
      }
      if (user) {
        return done('User already exists', null);
      }

      const encryptedPassword = bcryptjs.hashSync(password, salt);

      let newUser = new User({
        email,
        password: encryptedPassword,
        username,
      });

      newUser.save((error, inserted) => {
        if (error) {
          return done(error, null);
        }
        delete inserted.password;
        return done(null, inserted);
      });
    });
  }
);


module.exports = SignupStrategy;
