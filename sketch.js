var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var T_rex1,T_rex2,T_rex3,T_rex4,T_rex1_img,T_rex2_img,T_rex3_img,T_rex4_img ;
var T_rexs;

var ground;
var racetrack;

function preload(){
  ground = loadImage("ground.png");
  racetrack = loadImage("track.jpg");

  T_rex1_img = loadImage("trex.PNG")
  T_rex2_img = loadImage("trex.PNG")
  T_rex3_img = loadImage("trex.PNG")
  T_rex4_img = loadImage("trex.PNG")
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
