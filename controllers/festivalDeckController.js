const dbase = require("../util/database");

exports.updateFestivalDeck = (req, res, next) => {
  const userID = req.params.userID;
  const data = req.body;

  dbase
    .execute(
      "UPDATE festivaldeck SET beerTent=" +
        data.beerTent +
        ",beerTentStrong=" +
        data.beerTentStrong +
        ",barStrong=" +
        data.barStrong +
        ",bar=" +
        data.bar +
        ",stage=" +
        data.stage +
        ",chillzone=" +
        data.chillzone +
        ",refreshment=" +
        data.refreshment +
        ",forestToi=" +
        data.forestToi +
        ",toitoi=" +
        data.toitoi +
        ",cleanToi=" +
        data.cleanToi +
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
