var pos = 0;
var value = 0;


function setup() {

}

function draw() {
  createCanvas(550, windowHeight);
  background(255);
  console.log(mouseY);
  fill(0);
  textSize(26);
  text('WRITE IT, DOODLE IT, PERFORM IT.', 32, 32);
  fill(230);
  textSize(15);
  text('INSTRUCTIONS', windowWidth / 2.5, height - 30);
  if (mouseX > 220 && mouseX < 350 && mouseY > height - 50) {
    if (value == 1) {
      window.open("instructions.html", "_self");
    }
  }

  fill(0);
  rect(469.9, 30, 1, pos);
  triangle(471, 31.5 + pos, 474, 34.5 + pos, 475, 31.9 + pos);
  quad(475, 32 + pos, 474.9, 35 + pos, 480, 37 + pos, 481, 34 + pos);
  fill(255, 255, 255);
  quad(475.2, 32.1 + pos, 474, 34.6 + pos, 480.1, 37.1 + pos, 481.1, 34.1 + pos);

  if (mouseX > 470 && mouseX < 482 && mouseY > 30 + pos && mouseY < pos + 40) {
    console.log("over button!");
    fill(255, 204, 0);
    quad(475.2, 32.1 + pos, 474, 34.6 + pos, 480.1, 37.1 + pos, 481.1, 34.1 + pos);
    fill(25, 25, 25);
    textSize(10);
    text('you decide', 473, 30 + pos);
    if (value == 1) {
      if (pos < 10) {
        window.open("poem.html", "_self");
      }
      if (pos <= 250 && pos >= 10) {
        window.open("https://source.unsplash.com/random/480x480", "_self");
      }
      if (pos <= 375 && pos >= 250) {
        window.open("https://source.unsplash.com/random/1920x1080", "_self");
      }
      if (pos <= 500 && pos >= 375) {
        window.open("https://source.unsplash.com/random/1440x900", "_self");
      }
      if (pos >= 500) {
        window.open("https://source.unsplash.com/random/900x1440", "_self");
      }
    }
  }
  console.log(pos);
}

function mousePressed() {
  if (value === 0) {
    value = 1;
  } else {
    value = 0;
  }
}

function mouseWheel(event) {
  print(event.delta);
  pos += event.delta;
}
