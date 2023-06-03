let fontToUse;
let minStringLength;
let maxStringLength;
let charSize = 30;
let stringColor;
let leadColor;
let maxSpeed = 7;
let minSpeed = 3;
let characterSet = ["0", "1"];

let strings = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  minStringLength = height / charSize / 2;
  maxStringLength = ((height / charSize) * 7) / 8;

  for (let s = 0; s < width / charSize; s++) {
    strings.push(new MovingString(s * charSize));
  }

  fontToUse = loadFont("path/to/your/font.ttf");
  textFont(fontToUse);

  stringColor = color(90, 90, 90);
  leadColor = color(190, 190, 190);
}

function draw() {
  clear();

  for (let s = 0; s < strings.length; s++) {
    strings[s].move();
    strings[s].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class MovingString {
  constructor(tx) {
    this.x = tx;
    this.stringLength = int(random(minStringLength, maxStringLength));
    this.characters = [];
    for (let i = 0; i < this.stringLength; i++) {
      this.characters[i] = characterSet[int(random(characterSet.length))];
    }
    this.currentY = int(random(-this.stringLength * 2, -this.stringLength));
    this.speed = int(random(minSpeed, maxSpeed));
    this.updateFrequency = int(random(1, 3));
  }

  move() {
    if (frameCount % this.speed === 0) {
      this.currentY++;
      for (let i = 0; i < this.stringLength - 1; i++) {
        this.characters[i] = this.characters[i + 1];
        if (int(random(10)) === this.updateFrequency)
          this.characters[i] = characterSet[int(random(characterSet.length))];
      }
      this.characters[this.stringLength - 1] =
        characterSet[int(random(characterSet.length))];
    }
  }

  display() {
    fill(stringColor);
    for (let i = 0; i < this.stringLength - 1; i++) {
      text(
        this.characters[i],
        this.x,
        ((this.currentY + i) * charSize) % height
      );
    }

    fill(leadColor);
    text(
      this.characters[this.stringLength - 1],
      this.x,
      ((this.currentY + this.stringLength - 1) * charSize) % height
    );
  }
}
