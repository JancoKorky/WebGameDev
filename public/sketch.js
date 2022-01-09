let arrTiles = [];
const BOARD_TILES = 14;
let boardEnable = false;
let buildID = undefined;
let buildFestID = undefined;

let removePlayerBtn = undefined;
let removeFestBtn = undefined;

let playerBtnEnable = true;

let playerBtn1 = undefined;
let playerBtn2 = undefined;
let festivalBtn1 = undefined;
let festivalBtn2 = undefined;

// THERE IS CONFIGURATION OF TILES
// let playerType1 = 5; // 1-times plus points from  all tiles around
// let playerType2 = 3; // 2-times plus points from  all tiles around
// let playerType3 = 2; // 3-times plus points from  all tiles around
let playerType = [1, 1, 1, 1, 1, 3, 3, 2, 2, 2];

// festivalType1  // set up of BEER TENTS 1 tile
// festivalType2  // set up of BEER TENTS 2 tile
// festivalType3  // set up of BARS 1 tile
// festivalType4  // set up of BARS 2 tile
// festivalType5  // set up of STAGE tile
// festivalType6  // set up of CHILL ZONE tile
// festivalType7  // set up of REFRESHMENT tile
// festivalType8  // set up of FOREST TOILET tile
// festivalType9  // set up of TOI TOI tile
// festivalType10 // set up of EPIC TOILET tile
let festivalType = [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9, 9, 9, 10, 10];

function setup() {
  createCanvas(windowWidth, windowHeight - 1);
  constructBoard(BOARD_TILES);

  setPlayer1Status();
  setPileStatus();
}

function draw() {
  background(50);
  drawBoard(BOARD_TILES);

  showScoreDeskAndButtons();
}

function showScoreDeskAndButtons() {
  playerBtn1.draw_Button();
  playerBtn2.draw_Button();
  festivalBtn1.draw_Button();
  festivalBtn2.draw_Button();
  player.drawPlayerScore();

  drawPilePlayer();
  drawPileFestival();
}

function mousePressed() {
  if (playerBtnEnable) {
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
  }

  if (festivalBtn1.click_Button(mouseX, mouseY)) {
    buildFestID = festivalBtn1.id;
    removeFestBtn = 1;
    boardEnable = true;
  }

  if (festivalBtn2.click_Button(mouseX, mouseY)) {
    buildFestID = festivalBtn2.id;
    removeFestBtn = 2;
    boardEnable = true;
  }

  if (boardEnable) {
    for (let indexI = 0; indexI < BOARD_TILES; indexI++) {
      for (let indexJ = 0; indexJ < BOARD_TILES; indexJ++) {
        if (arrTiles[indexI][indexJ].click_Tile(mouseX, mouseY)) {
          if (buildID == 0) {
            playerBtnEnable = false;
            arrTiles[indexI][indexJ].setTypes(0, 0);
            arrTiles[indexI][indexJ].draw_Tile();
            checkWhichPlayerBtnRemove(removePlayerBtn);
          } else if (buildID == 1) {
            playerBtnEnable = false;
            arrTiles[indexI][indexJ].setTypes(0, 1);
            arrTiles[indexI][indexJ].draw_Tile();
            checkWhichPlayerBtnRemove(removePlayerBtn);
            // let house = {
            //   posX: indexI,
            //   posY: indexJ,
            //   userID: userID,
            // };
            // httpPost("/insertHouse", "json", house, (resposta) => {});
          } else if (buildID == 2) {
            playerBtnEnable = false;
            arrTiles[indexI][indexJ].setTypes(0, 2);
            arrTiles[indexI][indexJ].draw_Tile();
            checkWhichPlayerBtnRemove(removePlayerBtn);
            // let farm = {
            //   posX: indexI,
            //   posY: indexJ,
            //   userID: userID,
            // };
            // httpPost("/insertFarm", "json", farm, (resposta) => {});
          }
          switch (buildFestID) {
            case 0:
              playerBtnEnable = true;
              setTypePlusDraw(arrTiles[indexI][indexJ], 1, 0);
              checkWhichFestBtnRemove(removeFestBtn);
              break;
            case 1:
              playerBtnEnable = true;
              setTypePlusDraw(arrTiles[indexI][indexJ], 1, 1);
              checkWhichFestBtnRemove(removeFestBtn);
              break;
            case 2:
              playerBtnEnable = true;
              setTypePlusDraw(arrTiles[indexI][indexJ], 1, 2);
              checkWhichFestBtnRemove(removeFestBtn);
              break;
            case 3:
              playerBtnEnable = true;
              setTypePlusDraw(arrTiles[indexI][indexJ], 1, 3);
              checkWhichFestBtnRemove(removeFestBtn);
              break;
            case 4:
              playerBtnEnable = true;
              setTypePlusDraw(arrTiles[indexI][indexJ], 1, 4);
              checkWhichFestBtnRemove(removeFestBtn);
              break;
            case 5:
              playerBtnEnable = true;
              setTypePlusDraw(arrTiles[indexI][indexJ], 1, 5);
              checkWhichFestBtnRemove(removeFestBtn);
              break;
            case 6:
              playerBtnEnable = true;
              setTypePlusDraw(arrTiles[indexI][indexJ], 1, 6);
              checkWhichFestBtnRemove(removeFestBtn);
              break;
            case 7:
              playerBtnEnable = true;
              setTypePlusDraw(arrTiles[indexI][indexJ], 1, 7);
              checkWhichFestBtnRemove(removeFestBtn);
              break;
            case 8:
              playerBtnEnable = true;
              setTypePlusDraw(arrTiles[indexI][indexJ], 1, 8);
              checkWhichFestBtnRemove(removeFestBtn);
              break;
            case 9:
              playerBtnEnable = true;
              setTypePlusDraw(arrTiles[indexI][indexJ], 1, 9);
              checkWhichFestBtnRemove(removeFestBtn);
              break;
          }

          boardEnable = false;
          buildID = undefined;
          buildFestID = undefined;

          selectRandomPlayerTileTypeFromPile(playerBtn1);
          selectRandomPlayerTileTypeFromPile(playerBtn2);
          selectRandomFestivalTileType(festivalBtn1);
          selectRandomFestivalTileType(festivalBtn2);
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

function selectRandomPlayerTileTypeFromPile(playerBtn) {
  if (playerBtn.id == undefined && playerType.length > 0) {
    const random = Math.floor(Math.random() * playerType.length);

    switch (playerType[random]) {
      case 1:
        spliceAndSetBtnType(playerType, playerBtn, random);
        break;
      case 2:
        spliceAndSetBtnType(playerType, playerBtn, random);
        break;
      case 3:
        spliceAndSetBtnType(playerType, playerBtn, random);
        break;
    }
  }
}

function selectRandomFestivalTileType(festivalBtn) {
  if (festivalBtn.id == undefined && festivalType.length > 0) {
    const random = Math.floor(Math.random() * festivalType.length);

    switch (festivalType[random]) {
      case 1:
        spliceAndSetBtnType(festivalType, festivalBtn, random);
        break;
      case 2:
        spliceAndSetBtnType(festivalType, festivalBtn, random);
        break;
      case 3:
        spliceAndSetBtnType(festivalType, festivalBtn, random);
        break;
      case 4:
        spliceAndSetBtnType(festivalType, festivalBtn, random);
        break;
      case 5:
        spliceAndSetBtnType(festivalType, festivalBtn, random);
        break;
      case 6:
        spliceAndSetBtnType(festivalType, festivalBtn, random);
        break;
      case 7:
        spliceAndSetBtnType(festivalType, festivalBtn, random);
        break;
      case 8:
        spliceAndSetBtnType(festivalType, festivalBtn, random);
        break;
      case 9:
        spliceAndSetBtnType(festivalType, festivalBtn, random);
        break;
      case 10:
        spliceAndSetBtnType(festivalType, festivalBtn, random);
        break;
    }
  }
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

// -----------------
// HELPERS FUNCTIONS
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

function checkWhichPlayerBtnRemove(num) {
  if (num == 1) {
    playerBtn1.setBtnType(undefined);
  } else if (num == 2) {
    playerBtn2.setBtnType(undefined);
  }
}

function checkWhichFestBtnRemove(num) {
  if (num == 1) {
    festivalBtn1.setBtnType(undefined);
  } else if (num == 2) {
    festivalBtn2.setBtnType(undefined);
  }
}

function setTypePlusDraw(tile, typeBtn, typeNum) {
  tile.setTypes(typeBtn, typeNum);
  tile.draw_Tile();
}

function spliceAndSetBtnType(arr, btn, indexNum) {
  btn.setBtnType(arr[indexNum] - 1);
  arr.splice(indexNum, 1);
}
