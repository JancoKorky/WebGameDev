let arrTiles = [];
const BOARD_TILES = 14;
let boardEnable = false;
let buildID = undefined;
let removePlayerBtn = undefined;

// THERE IS CONFIGURATION OF TILES
// let playerType1 = 5; // 1-times plus points from  all tiles around
// let playerType2 = 3; // 2-times plus points from  all tiles around
// let playerType3 = 2; // 3-times plus points from  all tiles around
let playerType = [1, 1, 1, 1, 1, 3, 3, 2, 2, 2];

let festivalType1 = 3; // set up of BEER TENTS 1 tile
let festivalType2 = 6; // set up of BEER TENTS 2 tile
let festivalType3 = 2; // set up of BARS 1 tile
let festivalType4 = 4; // set up of BARS 2 tile
let festivalType5 = 3; // set up of STAGE tile
let festivalType6 = 2; // set up of CHILL ZONE tile
let festivalType7 = 1; // set up of REFRESHMENT tile
let festivalType8 = 2; // set up of FOREST TOILET tile
let festivalType9 = 3; // set up of TOI TOI tile
let festivalType10 = 2; // set up of EPIC TOILET tile

function setup() {
  createCanvas(windowWidth, windowHeight - 1);
  constructBoard(BOARD_TILES);

  setPlayer1Status();
  setPileStatus();
}

function draw() {
  background(50);
  drawBoard(BOARD_TILES);
  playerBtn1.draw_Button();
  playerBtn2.draw_Button();
  festivalBtn1.draw_Button();
  festivalBtn2.draw_Button();
  player.drawPlayerScore();
  drawPilePlayer();
  drawPileFestival();
}

function mousePressed() {
  if (playerBtn1.click_Button(mouseX, mouseY)) {
    buildID = playerBtn1.id;
    removePlayerBtn = 1;
    boardEnable = true;
  }

  if (playerBtn2.click_Button(mouseX, mouseY)) {
    buildID = playerBtn2.id;
    removePlayerBtn = 2;
    boardEnable = true;
  }

  if (boardEnable) {
    // console.log("bID " + buildID + " | score: " + player.score);

    for (let indexI = 0; indexI < BOARD_TILES; indexI++) {
      for (let indexJ = 0; indexJ < BOARD_TILES; indexJ++) {
        if (arrTiles[indexI][indexJ].click_Tile(mouseX, mouseY)) {
          if (buildID == 0) {
            arrTiles[indexI][indexJ].setTypes(0, 0);
            arrTiles[indexI][indexJ].draw_Tile();
            checkWhichBtnRemove(removePlayerBtn);
          } else if (buildID == 1) {
            arrTiles[indexI][indexJ].setTypes(0, 1);
            arrTiles[indexI][indexJ].draw_Tile();
            checkWhichBtnRemove(removePlayerBtn);
            // let house = {
            //   posX: indexI,
            //   posY: indexJ,
            //   userID: userID,
            // };
            // httpPost("/insertHouse", "json", house, (resposta) => {});
          } else if (buildID == 2) {
            arrTiles[indexI][indexJ].setTypes(0, 2);
            arrTiles[indexI][indexJ].draw_Tile();
            checkWhichBtnRemove(removePlayerBtn);
            // let farm = {
            //   posX: indexI,
            //   posY: indexJ,
            //   userID: userID,
            // };
            // httpPost("/insertFarm", "json", farm, (resposta) => {});
          }
          boardEnable = false;
          selectRandomPlayerTileTypeFromPile(playerBtn1);
          selectRandomPlayerTileTypeFromPile(playerBtn2);
        }
      }
    }
  }
}

function setPlayer1Status() {
  playerBtn1 = new TileButton(BOARD_TILES + (1 + BOARD_TILES) * 50, 50);
  playerBtn2 = new TileButton(BOARD_TILES + (1 + BOARD_TILES) * 50 + 70, 50);
  player = new Player("Jožko", BOARD_TILES + (1 + BOARD_TILES) * 50, 130);
  // tu som skoncil s geterom seterom potrebujem urobit zmenu score na zaklade niecoho, a rozchodit buttony -tu to asi bude vsetka logika
  selectRandomPlayerTileTypeFromPile(playerBtn1);
  selectRandomPlayerTileTypeFromPile(playerBtn2);
}

function setPileStatus() {
  festivalBtn1 = new FestivalButton(BOARD_TILES + (1 + BOARD_TILES) * 50, windowHeight / 2);
  festivalBtn2 = new FestivalButton(BOARD_TILES + (1 + BOARD_TILES) * 50 + 70, windowHeight / 2);

  selectRandomFestivalTileType(festivalBtn1);
  selectRandomFestivalTileType(festivalBtn2);
}
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
function selectRandomPlayerTileTypeFromPile(playerBtn) {
  if (playerBtn.id == undefined && playerType.length > 0) {
    const random = Math.floor(Math.random() * playerType.length);

    if (playerType[random] == 1) {
      playerType.splice(random, 1);
      playerBtn.setBtnType(0);
    } else if (playerType[random] == 2) {
      playerType.splice(random, 1);
      playerBtn.setBtnType(1);
    } else if (playerType[random] == 3) {
      playerType.splice(random, 1);
      playerBtn.setBtnType(2);
    }
  }
}

function selectRandomFestivalTileType(festivalBtn) {
  const random = Math.floor(Math.random() * 10);

  if (festivalBtn.id == undefined) {
    if (random == 0 && festivalType1 > 0) {
      festivalType1--;
      festivalBtn.setBtnType(0);
    }
    if (random == 1 && festivalType2 > 0) {
      festivalType2--;
      festivalBtn.setBtnType(1);
    }
    if (random == 2 && festivalType3 > 0) {
      festivalType3--;
      festivalBtn.setBtnType(2);
    }
    if (random == 3 && festivalType4 > 0) {
      festivalType4--;
      festivalBtn.setBtnType(3);
    }
    if (random == 4 && festivalType5 > 0) {
      festivalType5--;
      festivalBtn.setBtnType(4);
    }
    if (random == 5 && festivalType6 > 0) {
      festivalType6--;
      festivalBtn.setBtnType(5);
    }
    if (random == 6 && festivalType7 > 0) {
      festivalType7--;
      festivalBtn.setBtnType(6);
    }
    if (random == 7 && festivalType8 > 0) {
      festivalType8--;
      festivalBtn.setBtnType(7);
    }
    if (random == 8 && festivalType9 > 0) {
      festivalType9--;
      festivalBtn.setBtnType(8);
    }
    if (random == 9 && festivalType10 > 0) {
      festivalType10--;
      festivalBtn.setBtnType(9);
    }
  }
}

function drawPilePlayer() {
  push();
  fill("#888");
  stroke("#000");
  square(BOARD_TILES + (3 + BOARD_TILES) * 50, 30, 30, 10);
  square(BOARD_TILES + (3 + BOARD_TILES) * 50 + 2, 30 + 2, 30, 10);
  square(BOARD_TILES + (3 + BOARD_TILES) * 50 + 4, 30 + 4, 30, 10);
  noStroke();
  fill("#fff");

  text(playerType.length, BOARD_TILES + (3 + BOARD_TILES) * 50 + 16, 53);
  pop();
}

function drawPileFestival() {
  push();
  fill("#888");
  stroke("#000");
  square(BOARD_TILES + (3 + BOARD_TILES) * 50, windowHeight / 2 - 20, 30, 10);
  square(BOARD_TILES + (3 + BOARD_TILES) * 50 + 2, windowHeight / 2 - 18, 30, 10);
  square(BOARD_TILES + (3 + BOARD_TILES) * 50 + 4, windowHeight / 2 - 16, 30, 10);
  noStroke();
  fill("#fff");
  text(
    festivalType1 +
      festivalType2 +
      festivalType3 +
      festivalType4 +
      festivalType5 +
      festivalType6 +
      festivalType7 +
      festivalType8 +
      festivalType9 +
      festivalType10,
    BOARD_TILES + (3 + BOARD_TILES) * 50 + 13,
    windowHeight / 2 + 2
  );
  pop();
}

// function draw() {
//   background("#232e47");

//   if (firstScene) {
//     mainScene();
//   }
// }

// function mainScene() {
//   background("#232e47");
//   playerBtn1.draw_Button();
//   playerBtn2.draw_Button();
//   drawBoard(BOARD_TILES);
// }

// helpers
function constructBoard(numberOfTiles) {
  for (let i = 0; i < numberOfTiles; i++) {
    arrTiles[i] = [];
    for (let j = 0; j < numberOfTiles; j++) {
      arrTiles[i][j] = new Tile(i + i * 50, j + j * 50, i, j, 50);
    }
  }
}

function drawBoard(numberOfTiles) {
  for (let i = 0; i < numberOfTiles; i++) {
    for (let j = 0; j < numberOfTiles; j++) {
      arrTiles[i][j].draw_Tile();
    }
  }
}

function checkWhichBtnRemove(removePlayerBtn) {
  if (removePlayerBtn == 1) {
    playerBtn1.setBtnType(undefined);
  } else if (removePlayerBtn == 2) {
    playerBtn2.setBtnType(undefined);
  }
}
