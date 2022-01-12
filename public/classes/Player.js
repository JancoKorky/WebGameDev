class Player {
  constructor(name, posX, posY) {
    this.name = name;
    this.posX = posX;
    this.posY = posY;

    this.score = 50;
  }

  drawPlayerScore() {
    push();
    textSize(15);
    fill(255);
    noStroke();
    text("Player: " + this.name, this.posX, this.posY);
    text("Drunk: " + this.score + "%", this.posX, this.posY + 15);
    pop();
  }
}
