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
    text(festivalType.length, BOARD_TILES + (3 + BOARD_TILES) * 50 + 13, windowHeight / 2 + 2);
    pop();
  }