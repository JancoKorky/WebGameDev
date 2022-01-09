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
    this.tileEnable = false;
  }

  setTypes(type, typeNum) {
    this.type = type;
    this.typeNum = typeNum;
    this.setColor();
  }

  draw_Tile() {
    push();
    if (this.tileEnable && this.type == undefined) {
      fill("rgba(0,255,0, 0.3)");
    } else fill(this.color);
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
      switch (this.typeNum) {
        case 0:
          this.color = "#fff";
          break;
        case 1:
          this.color = "#f2faff";
          break;
        case 2:
          this.color = "#e1f3ff";
          break;
        case 3:
          this.color = "#d0ecff";
          break;
        case 4:
          this.color = "#bfe6ff";
          break;
        case 5:
          this.color = "#7bcbff";
          break;
        case 6:
          this.color = "#59beff";
          break;
        case 7:
          this.color = "#37b0ff";
          break;
        case 8:
          this.color = "#15a3ff";
          break;
        case 9:
          this.color = "#0093f2";
          break;
        case undefined:
          this.color = "rgba(0,255,0, 1)";
          break;
      }
    }
  }
}
