const Strategy = require('passport-local').Strategy;
const User = require('../models/users');



const LoginStrategy = new Strategy(
  function(username, password, done) {
    const user = username;
    console.log('passport strategy');


    // User.findOne({ username: username }, function (err, user) {
    // if (err) { return done(err); }
    // if (!user) { return done(null, false); }
    // if (!user.verifyPassword(password)) { return done(null, false); }
    // return done(null, user);
    // });

  }
);


module.exports = LoginStrategy;
// export default SignupStrategy;
