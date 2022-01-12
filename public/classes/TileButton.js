class TileButton {
  constructor(posX, posY, images) {
    this.posX = posX;
    this.posY = posY;
    this.id = undefined;
    this.color = "rgba(0,0,0,0)";
    this.images = images;
    this.image = undefined;
    this.widthBtn = 50;
  }

  draw_Button() {
    push();
    fill(this.color);
    square(this.posX, this.posY, this.widthBtn, 5);
    if (this.id != undefined) {
      image(this.image, this.posX, this.posY, this.widthBtn, this.widthBtn)
    }
    pop();
  }

  click_Button(posX, posY) {
    if (posX > this.posX && posX < this.posX + 100 && posY > this.posY && posY < this.posY + 50) {
      return true;
    } else {
      return false;
    }
  }

  setBtnType(id) {
    this.id = id;
    this.setColor();
    this.draw_Button();
  }

  setColor() {
    if (this.id == 0) {
      this.image = this.images.man;
    }
    if (this.id == 1) {
      this.image = this.images.man2x;
    }
    if (this.id == 2) {
      this.image = this.images.man3x;
    }
  }
}
