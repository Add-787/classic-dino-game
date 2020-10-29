let dino;
let dImg;
let cImg;
let cactii = [];
//let soundClassifier;
let classifier;
let label = 'listening...';
let soundModel = 'https://teachablemachine.withgoogle.com/models/uw_wsHb5B/';


function preload() {
  //const options = { probabilityThreshold: 0.95 };
  //soundClassifier=ml5.soundClassifier('SpeechCommands18w', options);
  classifier = ml5.soundClassifier(soundModel + 'model.json');
  dImg = loadImage('index.png');
  cImg = loadImage('index3.png');
}

function setup() {
  createCanvas(1200, 400);
  //frameRate(20);
  //soundClassifier.classify(gotCommand);
  classifier.classify(gotResult);
  dino = new Dino();
}

/* function mousePressed(){
  cactii.push(new Cactus());
} */

/*function gotCommand(error,results) {
  if(error){
    console.error(error);
  }
  console.log(results[0].label,results[0].confidence);
  if(results[0].label === 'up'){
    dino.jump();
  }
} */

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  console.log(label);
  if (label === 'Clapping') {
    dino.jump();
  }
}

function keyPressed() {
  if (key === ' ') {
    dino.jump();
  }
}

function draw() {

  if (random(1) < 0.01) {
    if (cactii.length === 0 || cactii[cactii.length - 1].x < width - 300) {
      dino.score++;
      cactii.push(new Cactus());
    }
  }

  background(255);

  textSize(30);
  text("Score: " + dino.score, width / 2, height / 2);

  for (let c of cactii) {
    c.show();
    c.move();
    if (dino.hits(c)) {
      console.log('Game over');
      console.log('Score:' + dino.score)
      noLoop();
    }
  }

  dino.show();
  dino.move();
}