class SelectedDeck {
  constructor(posX, posY, hei) {
    this.posX = posX;
    this.posY = posY;
    this.hei = hei;
  }

  draw_Selected() {
    push();
    fill("rgb(232, 0, 56)");
    rect(this.posX, this.posY,200, this.hei, 10);
    fill(255)
    noStroke()
    textSize(10)
    text("On move", this.posX+15, this.posY+15)
    pop();
  }
}
