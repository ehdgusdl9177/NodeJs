const express = require("express");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");
const { JsonWebTokenError } = require("jsonwebtoken");

const app = express();
const secretText = "superSecret";

const posts = [
  {
    username: "John",
    title: "Post 1",
  },
  {
    username: "mark",
    title: "Post 2",
  },
];

app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  // jwt를 이용해서 토큰 생성하기  payload + secretText
  const accessToken = jwt.sign(user, secretText);
  res.json({ accessToken: accessToken });
});

app.get("/posts", authMiddleware, (req, res) => {
  res.json(posts);
});

function authMiddleware(req, res, next) {
  // 토큰을 request headers에서 가져오기
  const authHeader = req.headers["authorization"];
  // Bearer asdasdasdasad
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  // 토큰이 있으니 유효한 토큰인지 확인
  jwt.verify(token, secretText, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

const port = 4000;

app.listen(port, () => {
  console.log("listening on port " + port);
});
