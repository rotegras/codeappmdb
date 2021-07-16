const passport = require('passport');


const SigninStrategy = require('./SigninStrategy');
const SignupStrategy = require('./SignupStrategy');
// optionall other strategies

passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);


module.exports = passport;
