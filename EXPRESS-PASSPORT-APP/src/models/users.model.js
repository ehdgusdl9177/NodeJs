const mongoose = require("mongoose");
const bcrypt = require("bycryptjs");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  kakaoId: {
    type: String,
    unique: true,
    sparse: true,
  },
});

userSchema.pre("save", (next) => {
  let user = this;
  // 비밀번호가 변경될 때만
  if (user.isModified("password")) {
    // salt를 생성한다.
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return next(err);

      bycrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = (plainPassword, callback) => {
  // bcrypt compare 비교
  // plain password => client, this.password => 데이터베이스에 있는 비밀번호
  bycrypt.compare(plainPassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
