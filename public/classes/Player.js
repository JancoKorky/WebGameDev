class Player {
  constructor(name, posX, posY) {
    this.name = name;
    this.posX = posX;
    this.posY = posY;

    this.score = 50;
  }

  drawPlayerScore() {
    push();
    textSize(20);
    fill(255);
    noStroke();
    text(this.name + " score: " + this.score, this.posX, this.posY);
    pop();
  }
}
