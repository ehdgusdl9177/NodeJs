const express = require("express");
const db = require("./models");
const app = express();

const User = db.users;

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("데이터베이스 drop 및 sync를 다시 맟춤.");
// });

app.use(express.json());

app.post("/users", (req, res) => {
  const { firstName, lastName, hasCar } = req.body;

  const user = {
    firstName,
    lastName,
    hasCar,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "유저를 생성하는데 오류가 발생했습니다",
      });
    });
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
