function checkAsyncLoad() {
    if (playerBtn1.id == undefined && playerBtn2.id == undefined && playerType.length > 0) {
      selectRandomPlayerTileTypeFromPile(playerBtn1);
      selectRandomPlayerTileTypeFromPile(playerBtn2);
    }
    if (festivalBtn1.id == undefined && festivalBtn2.id == undefined && festivalType.length > 0) {
      selectRandomFestivalTileType(festivalBtn1);
      selectRandomFestivalTileType(festivalBtn2);
    }
  }