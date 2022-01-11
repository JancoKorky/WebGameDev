const dbase = require("../util/database");

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
