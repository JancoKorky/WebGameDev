const { execute } = require("../util/database");
const dbase = require("../util/database");

exports.getBoard = (req, res, next) => {
  const userID = req.params.userID;
  dbase.execute("SELECT posX, posY, type, typeNum FROM board WHERE userID=" + userID).then((result) => {
    if (result[0].length > 0) {
      res.json(result[0]);
    } else {
      res.send({});
    }
  });
};

exports.postBoard = (req, res, next) => {
  const userID = req.params.userID;
  const data = req.body;
  dbase.execute("INSERT INTO board(userID, posX, posY, type, typeNum) VALUES (?,?,?,?,?)", [
    userID,
    data.posX,
    data.posY,
    data.type,
    data.typeNum,
  ]);
  res.send({});
};
//     const userID = req.params.userID;

//     dbase
//       .execute("SELECT * FROM festivalDeck WHERE userID='" + userID + "'")
//       .then((result) => {
//         const [newResult] = result[0];
//         res.json(newResult);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
