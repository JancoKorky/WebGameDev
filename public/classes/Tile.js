class Tile {
  constructor(posX, poxY, indexI, indexJ, tileWidth) {
    this.posX = posX;
    this.poxY = poxY;
    this.indexI = indexI;
    this.indexJ = indexJ;
    this.tileWidth = tileWidth;
    this.color = "rgba(0,255,0, 1)";
    this.type = undefined;
    this.typeNum = undefined;
  }

  setTypes(type, typeNum) {
    this.type = type;
    this.typeNum = typeNum;
    this.setColor();
  }

  draw_Tile() {
    push();
    fill(this.color);
    noStroke();
    square(this.posX, this.poxY, this.tileWidth, 5);
    pop();
  }

  click_Tile(posX, poxY) {
    if (
      posX > this.posX &&
      posX < this.posX + this.tileWidth &&
      poxY > this.poxY &&
      poxY < this.poxY + this.tileWidth
    ) {
      return true;
    } else {
      return false;
    }
  }

  setColor() {
    if (this.type == 0) {
      switch (this.typeNum) {
        case 0:
          this.color = "#f50";
          break;
        case 1:
          this.color = "#ff0";
          break;
        case 2:
          this.color = "#0f5";
          break;
        case undefined:
          this.color = "rgba(0,255,0, 1)";
          break;
      }
    }
    if (this.type == 1) {
    }
  }
}
