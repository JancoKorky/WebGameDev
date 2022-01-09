class TileButton {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.id = undefined;
    this.color = "rgba(0,0,0,0)";
  }

  draw_Button() {
    push();
    fill(this.color);
    square(this.posX, this.posY, 50, 5);
    if (this.id != undefined) {
      fill(0);
      text(this.id, this.posX + 23, this.posY + 27);
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
      this.color = "#f50";
    }
    if (this.id == 1) {
      this.color = "#ff0";
    }
    if (this.id == 2) {
      this.color = "#0f5";
    }
    if (this.id == undefined) {
      this.color = "rgba(0,0,0,0)";
    }
  }
}
