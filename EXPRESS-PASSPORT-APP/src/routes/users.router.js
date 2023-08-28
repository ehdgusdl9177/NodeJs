const express = require("express");
const passport = require("passport");
const sendMail = require("../mail/mail");
const User = require("../models/users.model");
const usersRouter = express.Router();

usersRouter.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.json({ message: info });
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  })(req, res, next);
});

usersRouter.post("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

usersRouter.post("/signup", async (req, res) => {
  // user 객체를 생성한다.
  const user = new User(req.body);
  try {
    // user 컬렉션에 유저를 저장한다.
    await user.save();
    // 이메일 보내기
    sendMail("k23129177@example.com", "Kevin", "welcome");
    res.redirect("/login");
  } catch (error) {
    console.error(error);
  }
});

usersRouter.get("/google", passport.authenticate("google"));

usersRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
  })
);

module.exports = usersRouter;
