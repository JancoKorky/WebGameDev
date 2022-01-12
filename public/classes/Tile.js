class Tile {
  constructor(posX, posY, indexI, indexJ, tileWidth, images) {
    this.posX = posX;
    this.posY = posY;
    this.indexI = indexI;
    this.indexJ = indexJ;
    this.tileWidth = tileWidth;
    this.type = undefined;
    this.typeNum = undefined;
    this.tileEnable = false;
    this.points = undefined;
    this.image = undefined;
    this.images = images;
  }

  setTypes(type, typeNum) {
    this.type = type;
    this.typeNum = typeNum;
    this.setImageAndPoints();
  }

  draw_Tile() {
    push();
    if (this.tileEnable && this.type == undefined) {
      fill("rgba(0,255,0, 0.3)");
      square(this.posX, this.posY, this.tileWidth, 5);
    } else if (this.image) {
      image(this.image, this.posX, this.posY, this.tileWidth, this.tileWidth);
    } else {
      noStroke();
      fill("rgba(0,0,0, 0)");
      square(this.posX, this.posY, this.tileWidth, 5);
    }
    pop();
  }

  click_Tile(posX, posY) {
    if (
      posX > this.posX &&
      posX < this.posX + this.tileWidth &&
      posY > this.posY &&
      posY < this.posY + this.tileWidth
    ) {
      return true;
    } else {
      return false;
    }
  }

  setImageAndPoints() {
    if (this.type == 0) {
      switch (this.typeNum) {
        case 0:
          this.image = this.images.man;
          break;
        case 1:
          this.image = this.images.man2x;
          break;
        case 2:
          this.image = this.images.man3x;
          break;
        case undefined:
          this.color = "rgba(0,0,0, 0)";
          break;
      }
    }
    if (this.type == 1) {
      switch (this.typeNum) {
        case 0:
          this.points = 1;
          this.image = this.images.beer;
          break;
        case 1:
          this.points = 2;
          this.image = this.images.beer2x;
          break;
        case 2:
          this.points = 6;
          this.image = this.images.shot;
          break;
        case 3:
          this.points = 3;
          this.image = this.images.shot2x;
          break;
        case 4:
          this.points = -5;
          this.image = this.images.stage;
          break;
        case 5:
          this.points = -3;
          this.image = this.images.chill;
          break;
        case 6:
          this.points = -6;
          this.image = this.images.refreshment;
          break;
        case 7:
          this.points = -1;
          this.image = this.images.ftoi;
          break;
        case 8:
          this.points = -2;
          this.image = this.images.toitoi;
          break;
        case 9:
          this.points = -4;
          this.image = this.images.toilet;
          break;
        case undefined:
          this.color = "rgba(0,255,0, 1)";
          break;
      }
    }
  }
}
