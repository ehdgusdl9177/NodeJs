const express = require("express");
const path = require("path");
const { default: mongoose } = require("mongoose");
const User = require("./models/users.model");
const passport = require("passport");
const cookieSession = require("cookie-session");
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("./middleware/auth");
const app = express();

require("dotenv"), config();

app.use(
  cookieSession({
    name: "cookie-session-name",
    keys: [process.env.COOKIE_ENCRYPTION_KEY],
  })
);

// register regenerate & save after the cookieSession middleware initialization
app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb();
    };
  }
  next();
});

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log("Error connecting");
  });

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", checkAuthenticated, (req, res, next) => {
  res.render("index");
});

app.get("/login", checkNotAuthenticated, (req, res, next) => {
  res.render("login");
});

app.post("/login", (req, res, next) => {
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

app.post("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

app.get("/signup", checkNotAuthenticated, (req, res, next) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  // user 객체를 생성한다.
  const user = new User(req.body);
  try {
    // user 컬렉션에 유저를 저장한다.
    await user.save();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
});

app.get("/auth/google", passport.authenticate("google"));
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
  })
);

const config = require("config");
const serverConfig = config.get("server");

const port = serverConfig.port;
app.listen(port, () => {
  console.log("listening on port " + port);
});
