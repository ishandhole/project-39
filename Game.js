class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    T_rex1 = createSprite(100,200);
    T_rex2 = createSprite(300,200);
    T_rex3 = createSprite(500,200);
    T_rex4 = createSprite(700,200);
    T_rexs = [T_rex1,T_rex2,T_rex3,T_rex4];

    T_rex1.addImage(T_rex1_img);
    T_rex2.addImage(T_rex2_img);
    T_rex3.addImage(T_rex3_img);
    T_rex4.addImage(T_rex4_img);
    
    T_rex1.scale = 0.5;
    T_rex2.scale = 0.5;
    T_rex3.scale = 0.5;
    T_rex4.scale = 0.5;
    
    }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background(ground);
      image(racetrack, 0,-displayHeight*4,displayWidth, displayHeight*5);
      var index = 0;
      var x = 0;
      var y;

      for(var plr in allPlayers){

        index+=1;

        x+=200;

        y = displayHeight - allPlayers[plr].distance;
        T_rexs[index -1 ].x = x;
        T_rexs[index - 1].y = y;

        if(index === player.index){
          T_rexs[index -1].shapeColor = "cyan";
          camera.position.x  = displayWidth/2;
          camera.position.y = T_rexs[index -1].y;
        }
      }
      
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(player.distance> 4000){
      gameState = 2;

    }

    drawSprites();
  }

  end(){
    console.log("game has ended");
  }
}
