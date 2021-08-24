var sprite1,sprite2,sprite3,sprite4;

function setup() {
  createCanvas(1000,800);
  sprite1=createSprite(500,400,100,100);
  sprite2=createSprite(700,200,100,100);
  sprite3=createSprite(200,300,100,100);
  sprite4=createSprite(600,100,100,100);
  sprite1.debug=true;
  sprite2.debug=true; 
}

function draw() {
  background("pink");
  sprite2.x=World.mouseX
  sprite2.y=World.mouseY
  // console.log(sprite2.x-sprite1.x)
  // console.log(sprite2.y-sprite1.y)
  
  if(contact(sprite2,sprite3)){
    sprite3.shapeColor="red";
    sprite3.width+=1
  }
  else{
    sprite3.shapeColor="blue"
     sprite2.shapeColor="blue"
     sprite3.width=100;
  }

  if(contact(sprite2,sprite4)){
   sprite4.x=250;
   sprite4.y=30;
  }

  else{
    sprite4.x=500;
    sprite4.y=300;
    sprite4.shapeColor="cyan";
    
  }

  if(contact(sprite2,sprite1)){
    sprite1.velocityX=2;
    sprite1.shapeColor="black";
  }
  else{
    sprite1.velocityX=0;
    sprite1.shapeColor="red"
  }
  drawSprites();
}

