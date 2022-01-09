class FestivalButton {
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
      text(this.id + 1, this.posX + 22, this.posY + 27);
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
  }

  setColor() {
    if (this.id == 0) {
      this.color = "#fff";
    }
    if (this.id == 1) {
      this.color = "#f2faff";
    }
    if (this.id == 2) {
      this.color = "#e1f3ff";
    }
    if (this.id == 3) {
      this.color = "#d0ecff";
    }
    if (this.id == 4) {
      this.color = "#bfe6ff";
    }
    if (this.id == 5) {
      this.color = "#7bcbff";
    }
    if (this.id == 6) {
      this.color = "#59beff";
    }
    if (this.id == 7) {
      this.color = "#37b0ff";
    }
    if (this.id == 8) {
      this.color = "#15a3ff";
    }
    if (this.id == 9) {
      this.color = "#0093f2";
    }
    if (this.id == undefined) {
      this.color = "rgba(0,0,0,0)";
    }
  }
}
