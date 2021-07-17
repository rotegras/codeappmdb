const passport = require('passport');


const LoginStrategy = require('./LoginStrategy');
const SignupStrategy = require('./SignupStrategy');
// optionall other strategies

passport.use('local-login', LoginStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;
