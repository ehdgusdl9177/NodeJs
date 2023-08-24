const passport = require("passport");
const User = require("../models/users.model");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

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

const LocalStrategyConfig = new LocalStrategy(
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
);

passport.use("local", LocalStrategyConfig);

const GoogleStrategyConfig = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["email", "profile"],
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }, (err, existingUser) => {
      if (err) return done(err);
      if (existingUser) {
        return done(null, existingUser);
      } else {
        const user = new User();
        user.email = profile.email[0].value;
        user.googleId = profile.id;
        user.save((err) => {
          done(err, user);
        });
      }
    });
  }
);

passport.use("google", GoogleStrategyConfig);
