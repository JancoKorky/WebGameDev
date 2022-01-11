const dbase = require("../util/database");

exports.getPlayerDeck = (req, res, next) => {
  const userID = req.params.userID;

  dbase
    .execute("SELECT * FROM playerDeck WHERE userID='" + userID + "'")
    .then((result) => {
      const [newResult] = result[0];
      res.json(newResult);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updatePlayerDeck = (req, res, next) => {
  const userID = req.params.userID;
  const data = req.body;

  dbase
    .execute(
      "UPDATE playerdeck SET times_three=" +
        data.times_three +
        ",times_two=" +
        data.times_two +
        ",times_one=" +
        data.times_one +
        " WHERE userID='" +
        userID +
        "'"
    )
    .then()
    .catch((err) => {
      console.log(err);
    });

  res.json({});
};
