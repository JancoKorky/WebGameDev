const dbase = require("../util/database");

exports.login = (req, res, next) => {
  let user = req.body.username;
  let pass = req.body.password;

  dbase
    .execute("SELECT * FROM user WHERE username='" + user + "' AND password = '" + pass + "'")
    .then((result) => {
      if (result[0].length > 0) {
        const [newResult] = result[0];
        res.json(newResult);
      } else {
        dbase
          .execute("INSERT INTO user (username, password) VALUES (?, ?)", [user, pass])
          .then((result) => {
            dbase
              .execute(
                "SELECT userID, username, score, newgame FROM User WHERE username='" +
                  user +
                  "' AND password = '" +
                  pass +
                  "'"
              )
              .then((result) => {
                const [newResult] = result[0];

                dbase
                  .execute("SELECT * FROM playerdeck WHERE userID='" + newResult.userID + "'")
                  .then((result) => {
                    if (!(result[0].length > 0)) {
                      dbase
                        .execute("INSERT INTO playerdeck (userID) VALUES (?)", [newResult.userID])
                        .then()
                        .catch((err) => {
                          console.log(err);
                        });
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                dbase
                  .execute("SELECT * FROM festivaldeck WHERE userID='" + newResult.userID + "'")
                  .then((result) => {
                    if (!(result[0].length > 0)) {
                      dbase
                        .execute("INSERT INTO festivaldeck (userID) VALUES (?)", [newResult.userID])
                        .then()
                        .catch((err) => {
                          console.log(err);
                        });
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });

                res.json(newResult);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.resetID = (req, res, next) => {
  const userID = req.params.userID;

  dbase
    .execute("UPDATE user SET score=50, newgame=FALSE WHERE userID=" + userID)
    .then((result) => {
      dbase
        .execute("SELECT * FROM user WHERE userID='" + userID + "'")
        .then((result) => {
          const [newResult] = result[0];
          res.json(newResult);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateScore = (req, res, next) => {
  const userID = req.params.userID;
  const score = req.body.score;

  dbase.execute("UPDATE user SET score=" + score + " WHERE " + userID).then((result) => {
    res.send({ sucess: true });
  });
};
