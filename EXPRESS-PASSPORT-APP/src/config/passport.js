const passport = require("passport");
const User = require("../models/users.model");
const LocalStrategy = require("passport-local").Strategy;

// req.login(user)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// clinet => session => request
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    (email, passowrd, done) => {
      User.findOne(
        {
          email: email.toLocaleLowerCase(),
        },
        (err, user) => {
          if (err) return done(err);

          if (!user) {
            return done(null, false, { message: `Email ${email} not found` });
          }
          user.comparePassword(passowrd, (err, isMatch) => {
            if (err) return done(err);

            if (isMatch) {
              return done(null, user);
            }
            return done(null, false, { message: `Invalid email or passowrd` });
          });
        }
      );
    }
  )
);
