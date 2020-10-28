let dino;
let dImg;
let cImg;
let cactii=[];
let soundClassifier;


function preload(){
  const options = { probabilityThreshold: 0.95 };
  soundClassifier=ml5.soundClassifier('SpeechCommands18w', options);
  dImg=loadImage('index.png');
  cImg=loadImage('index3.png');
}

function setup() {
  createCanvas(1200, 400);
  soundClassifier.classify(gotCommand);
  dino=new Dino();
}

function mousePressed(){
  cactii.push(new Cactus());
}

function gotCommand(error,results) {
  if(error){
    console.error(error);
  }
  console.log(results[0].label,results[0].confidence);
  if(results[0].label === 'up'){
    dino.jump();
  }
}

function keyPressed(){
  if(key === ' '){
    dino.jump();
  }
}

function draw() {
  
  if(random(1)<0.005)
    {
       cactii.push(new Cactus());     
    }
  
  background(255);
  
  for(let c of cactii){
    c.show();
    c.move();
    if(dino.hits(c))
      {
        console.log('Game over');
        noLoop();
      }
  }
  
  dino.show();
  dino.move();
}